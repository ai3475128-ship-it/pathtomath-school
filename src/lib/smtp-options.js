import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

// System resolution is opt-in for VPNs whose resolver differs from DNS queries.
// Keep the original hostname for TLS certificate verification and SNI.
export async function smtpOptions(env = process.env, resolve = lookup) {
  const hostname = env.SMTP_HOST;
  const port = Number(env.SMTP_PORT || 465);
  if (!Number.isSafeInteger(port) || port < 1 || port > 65535)
    throw new Error("Invalid SMTP port");
  let host = hostname;
  let tls;
  if (env.SMTP_RESOLVER === "system" && hostname && !isIP(hostname)) {
    const result = await resolve(hostname);
    host = result.address;
    tls = { servername: hostname };
  }
  return {
    host, port, secure: port === 465,
    ...(port === 587 ? { requireTLS: true } : {}),
    ...(tls ? { tls } : {}),
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD },
    disableFileAccess: true, disableUrlAccess: true,
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  };
}

const knownCodes = new Set([
  "EAUTH", "ECONNECTION", "ESOCKET", "ETIMEDOUT", "EDNS", "ETLS",
  "EPROTOCOL", "EENVELOPE", "EMESSAGE", "ENOAUTH", "ENOTFOUND",
  "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "EHOSTUNREACH", "ENETUNREACH",
  "CERT_HAS_EXPIRED", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN",
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "ERR_TLS_CERT_ALTNAME_INVALID",
]);
export function safeSmtpError(error) {
  const code = knownCodes.has(error?.code) ? error.code :
    error?.message === "Connection closed" ? "CONNECTION_CLOSED" : "OTHER";
  const command = typeof error?.command === "string" && /^(CONN|STARTTLS|AUTH(?: (?:PLAIN|LOGIN|XOAUTH2))?|MAIL FROM|RCPT TO|DATA)$/.test(error.command)
    ? error.command : null;
  const status = Number.isInteger(error?.responseCode) && error.responseCode >= 100 && error.responseCode <= 599
    ? error.responseCode : null;
  return { code, command, status };
}
