import nextEnv from "@next/env";
import nodemailer from "nodemailer";
import { smtpOptions, safeSmtpError } from "../src/lib/smtp-options.js";

// Loads the same project files as Next.js. No credentials or SMTP transcript are printed.
nextEnv.loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production", {
  info() {}, error() {},
});
const env = process.env;
if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASSWORD) {
  console.log("Не заполнены SMTP_HOST, SMTP_USER или SMTP_PASSWORD.");
  process.exitCode = 1;
} else {
  console.log(`Node.js: ${process.version}`);
  console.log(`Порт: ${Number(env.SMTP_PORT || 465)}`);
  const results = [];
  for (const resolver of ["default", "system"]) {
    let transport;
    let authenticated = false;
    try {
      const options = await smtpOptions({ ...env, SMTP_RESOLVER: resolver });
      // This diagnostic must never send credentials over an unencrypted connection.
      if (!options.secure) options.requireTLS = true;
      // Do not expose SMTP messages, identities, or credentials in logs.
      options.logger = {
        info(info) { if (info.action === "authenticated") authenticated = true; },
        debug() {}, warn() {}, error() {}, trace() {}, fatal() {},
      };
      transport = nodemailer.createTransport(options);
      await transport.verify();
      if (!authenticated) throw new Error("SMTP authentication was not confirmed");
      results.push(true);
      console.log(`${resolver}: подключение и вход успешны`);
    } catch (error) {
      results.push(false);
      const { code, command, status } = safeSmtpError(error);
      console.log(`${resolver}: ошибка ${code}; этап ${command || "не определён"}; ответ ${status || "нет"}`);
    } finally {
      transport?.close();
    }
  }
  if (!results[0] && results[1])
    console.log("В этой сети попробуйте SMTP_RESOLVER=system в .env.local и перезапустите сервер.");
  else if (results[0]) console.log("Стандартный способ соединения работает.");
  if (!results.some(Boolean)) process.exitCode = 1;
}
