"use server";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/db";
import { emailAddress } from "@/lib/validation";
import { activatePendingUser } from "@/lib/verification";
import { consumeRateLimit } from "@/lib/rate-limit";
export async function verifyCode(formData) {
  let email;
  try {
    email = emailAddress(formData.get("email"));
  } catch {
    redirect("/register?error=fields");
  }
  const code = formData.get("code"),
    db = await connectDB();
  if (!consumeRateLimit(db, "verify-email", email, 10, 15 * 60000))
    redirect(`/verify-email?email=${encodeURIComponent(email)}&error=limited`);
  if (
    typeof code !== "string" ||
    !/^\d{6}$/.test(code.trim()) ||
    !activatePendingUser(db, email, code.trim())
  )
    redirect(`/verify-email?email=${encodeURIComponent(email)}&error=wrong`);
  redirect("/login?success=verified");
}
