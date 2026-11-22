// Keep the original sentences unchanged while presenting the terms as a list.
export function splitFinancialCondition(text) {
  const sentences = text.trim().split(/(?<=[.!?])\s+(?=[А-ЯЁ])/u);
  if (sentences.length < 3) return { opening: text.trim(), terms: [], question: '' };
  return { opening: sentences[0], terms: sentences.slice(1, -1), question: sentences.at(-1) };
}
