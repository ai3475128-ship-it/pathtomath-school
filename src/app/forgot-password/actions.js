"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { after } from "next/server";
import { connectDB } from "@/lib/db";
import { sendEmail, smtpConfigured } from "@/lib/email";
import {
  completePasswordReset, issuePasswordReset, newPasswordResetToken,
  PASSWORD_RESET_COOKIE, PASSWORD_RESET_LIFETIME,
} from "@/lib/password-reset";
import { consumeRateLimit } from "@/lib/rate-limit";
import { emailAddress, passwordValue } from "@/lib/validation";

const path = "/forgot-password";
const codeStep = `${path}?step=code`;
const cookieOptions = {
  path,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};

export async function requestPasswordReset(formData) {
  let email;
  try {
    email = emailAddress(formData.get("email"));
  } catch {
    redirect(`${path}?error=email`);
  }
  if (!smtpConfigured()) redirect(`${path}?error=unavailable`);
  const db = await connectDB();
  if (
    !consumeRateLimit(db, "password-reset-global", "all", 100, PASSWORD_RESET_LIFETIME) ||
    !consumeRateLimit(db, "password-reset-email", email, 3, PASSWORD_RESET_LIFETIME)
  ) redirect(`${path}?error=limited`);

  const token = newPasswordResetToken();
  (await cookies()).set(PASSWORD_RESET_COOKIE, token, {
    ...cookieOptions, maxAge: PASSWORD_RESET_LIFETIME / 1000,
  });
  // Keep account lookup and SMTP outside the response so delivery time cannot reveal an account.
  after(async () => {
    try {
      const challenge = issuePasswordReset(db, email, token);
      if (challenge) {
        await sendEmail({
          to: challenge.email,
          subject: "Код восстановления пароля PATHtoMATH",
          text: `Ваш код восстановления пароля: ${challenge.code}. Код действует 15 минут. Если вы не запрашивали восстановление, проигнорируйте это письмо.`,
        });
      }
    } catch {
      console.error("Не удалось подготовить или отправить письмо восстановления пароля");
    }
  });
  redirect(codeStep);
}

export async function resetForgottenPassword(formData) {
  const store = await cookies();
  const token = store.get(PASSWORD_RESET_COOKIE)?.value;
  if (!token) redirect(`${path}?error=expired`);
  let password;
  try {
    password = passwordValue(formData.get("password"));
  } catch {
    redirect(`${codeStep}&error=password`);
  }
  if (password !== formData.get("confirmPassword"))
    redirect(`${codeStep}&error=confirmation`);
  const code = formData.get("code");
  if (
    typeof code !== "string" ||
    !(await completePasswordReset(await connectDB(), token, code.trim(), password))
  ) redirect(`${codeStep}&error=code`);

  store.set(PASSWORD_RESET_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  redirect("/login?success=password-reset");
}
