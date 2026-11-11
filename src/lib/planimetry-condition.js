// Conditions in the supplied collection use Latin point names and degree measures.
export function tokenizePlanimetryCondition(text) {
  return text.split(/([A-Z]+(?:\s*=\s*\d+(?:,\d+)?)?|\d+(?:,\d+)?°)/g)
    .map((value, index) => ({ math: index % 2 === 1, value: index % 2 ? value.replace('°', '^{\\circ}') : value }));
}
