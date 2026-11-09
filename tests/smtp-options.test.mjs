import test from "node:test";
import assert from "node:assert/strict";
import { smtpOptions, safeSmtpError } from "../src/lib/smtp-options.js";

test("system resolver connects to its address while preserving the SMTP hostname for TLS", async () => {
  const env = { SMTP_HOST: "smtp.example.test", SMTP_PORT: "465", SMTP_USER: "u", SMTP_PASSWORD: "p", SMTP_RESOLVER: "system" };
  const options = await smtpOptions(env, async (name) => {
    assert.equal(name, "smtp.example.test");
    return { address: "192.0.2.42", family: 4 };
  });
  assert.equal(options.host, "192.0.2.42");
  assert.equal(options.tls.servername, "smtp.example.test");
  assert.equal(options.secure, true);
  assert.equal(options.tls.rejectUnauthorized, undefined);
  assert.deepEqual(options.auth, { user: "u", pass: "p" });
});

test("default resolver and local SMTP remain unchanged", async () => {
  const resolve = () => { throw Error("unexpected lookup"); };
  const standard = await smtpOptions({ SMTP_HOST: "smtp.example.test", SMTP_PORT: "587" }, resolve);
  assert.equal(standard.host, "smtp.example.test");
  assert.equal(standard.secure, false);
  assert.equal(standard.requireTLS, true);
  assert.equal(standard.tls, undefined);
  const local = await smtpOptions({ SMTP_HOST: "127.0.0.1", SMTP_PORT: "2525", SMTP_RESOLVER: "system" }, resolve);
  assert.equal(local.host, "127.0.0.1");
  await assert.rejects(smtpOptions({ SMTP_PORT: "99999" }), /Invalid SMTP port/);
});

test("error reporting never returns server text, email addresses, passwords or arbitrary commands", () => {
  assert.deepEqual(safeSmtpError({ code: "EAUTH", responseCode: 535, command: "AUTH PLAIN", message: "sensitive@example.test secret" }), {code:"EAUTH",command:"AUTH PLAIN",status:535});
  assert.deepEqual(safeSmtpError({ code: "secret", command: "AUTH secret", responseCode: "535", message: "secret" }), {code:"OTHER",command:null,status:null});
  assert.equal(safeSmtpError(new Error("Connection closed")).code, "CONNECTION_CLOSED");
});
