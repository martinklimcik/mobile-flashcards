/**
 * Formats noun
 * @param {number} count word's occurence
 * @param {string} word word(noun) to format
 * @returns formatted word (e.g.: 1 word, 2 words, No words)
 */
export function formatNoun(count, word) {
  _count = count === 0 ? "No" : count;
  _word = count === 1 ? word : word + "s";
  return _count + " " + _word;
}
