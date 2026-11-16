// The original statements are LaTeX arrays of text rows. Convert their layout
// to semantic text while retaining the small mathematical fragments and tables.
function textValue(value) {
  return value.replace(/\\%/g, '%').replace(/\\,/g, '\u202f').replace(/---/g, '—');
}

function partsOf(value) {
  const parts = [];
  const pattern = /\\text\{([^{}]*)\}/g;
  let last = 0, match;
  const addMath = (fragment) => {
    const math = fragment.replace(/\\quad/g, '').replace(/&/g, '').trim();
    if (math) parts.push({ type: 'math', value: math });
  };
  while ((match = pattern.exec(value))) {
    addMath(value.slice(last, match.index));
    parts.push({ type: 'text', value: textValue(match[1]) });
    last = pattern.lastIndex;
  }
  addMath(value.slice(last));
  return parts;
}

function parseTable(value) {
  const body = value.replace(/^\\begin\{array\}\{[^}]*\}/, '').replace(/\\end\{array\}$/, '');
  const rows = body.split(/\\\\/).map((row) => row.replace(/\\hline/g, '').trim()).filter(Boolean);
  return { type: 'table', rows: rows.map((row) => row.split('&').map((cell) => partsOf(cell.trim()))) };
}

function lastText(parts) {
  return [...parts].reverse().find((part) => part.type === 'text');
}

function appendParts(target, incoming) {
  if (!incoming.length) return;
  const last = target[target.length - 1], first = incoming[0];
  const hyphenated = last?.type === 'text' && /-\s*$/.test(last.value) && first.type === 'text' && /^\s*[а-яё]/u.test(first.value);
  if (hyphenated) {
    last.value = last.value.replace(/-\s*$/, '');
    first.value = first.value.trimStart();
  } else {
    // Each LaTeX row was an artificial line break, not necessarily a space.
    if (last?.type === 'text') last.value = last.value.replace(/\s+$/, '');
    if (first.type === 'text') first.value = first.value.trimStart();
    if (!(first.type === 'text' && /^[,.;:!?)]/.test(first.value))) target.push({ type: 'text', value: ' ' });
  }
  target.push(...incoming);
}

export function parseEconomicsCondition(input) {
  const outer = input.trim().match(/^\\begin\{(array|aligned)\}(?:\{[^}]*\})?([\s\S]*)\\end\{\1\}$/);
  if (!outer) throw new Error('Unexpected economic task condition');
  const tables = [];
  const body = outer[2].replace(/\\begin\{array\}\{[^}]*\}[\s\S]*?\\end\{array\}/g, (table) => {
    const index = tables.push(parseTable(table)) - 1;
    return `§TABLE${index}§`;
  });
  const blocks = [];
  for (const raw of body.split(/\\\\/)) {
    let row = raw.trim().replace(/^&\s*/, '');
    if (!row) continue;
    const leading = row.match(/^(?:(?:\\quad)\s*)*/)?.[0] || '';
    const indent = (leading.match(/\\quad/g) || []).length;
    row = row.slice(leading.length).trim();
    const table = row.match(/^§TABLE(\d+)§$/);
    if (table) { blocks.push(tables[Number(table[1])]); continue; }
    let bullet = row.startsWith('\\bullet');
    if (bullet) row = row.replace(/^\\bullet\s*/, '');
    const parts = partsOf(row);
    if (!parts.length) continue;
    const firstText = parts[0];
    if (!bullet && firstText.type === 'text' && /^\s*[–—-]\s+/.test(firstText.value)) {
      bullet = true;
      firstText.value = firstText.value.replace(/^\s*[–—-]\s+/, '');
    }
    if (bullet) { blocks.push({ type: 'bullet', parts }); continue; }
    const previous = blocks.at(-1);
    const end = previous?.parts && lastText(previous.parts)?.value.trimEnd();
    const finished = end && /[.;?!:]$/.test(end) && !/(?:тыс|млн|руб|г)\.$/i.test(end);
    if (!previous || previous.type === 'table' || (indent === 0 && finished)) {
      blocks.push({ type: 'paragraph', parts });
    } else {
      appendParts(previous.parts, parts);
    }
  }
  return blocks;
}
