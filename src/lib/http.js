export function sameOrigin(request) {
  const expected = new URL(process.env.APP_ORIGIN || request.url).origin;
  return (
    request.headers.get("origin") === expected &&
    request.headers.get("sec-fetch-site") !== "cross-site"
  );
}
export async function limitedBody(request, max = 16384) {
  const reader = request.body?.getReader();
  if (!reader) return new Uint8Array();
  const chunks = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > max) {
      await reader.cancel();
      throw Error("Request too large");
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks);
}
