"use strict";

function sumArray(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

function uniqueValues(values) {
  return [...new Set(values)];
}

function minMax(numbers) {
  return numbers.reduce(
    ([min, max], num) => [
      num < min ? num : min,
      num > max ? num : max,
    ],
    [numbers[0], numbers[0]]
  );
}

function shortenText(text, maxWords) {
  const words = text.trim().split(/\s+/);

  if (words.length <= maxWords) {
    return words.join(' ');
  }

  const fragment = words.slice(0, maxWords).join(' ');
  const dots = fragment.endsWith('.') ? '..' : '...';

  return fragment + dots;
}

function swapParts(text) {
  const [first, second] = text.split(' ');
  return `${second} ${first}`;
}

function parseUrlParts(url) {
  const match = url.match(/^(\w+):\/\/([^\/\?]+)(\/[^\?]*)?\??(.*)$/);

  return [
    match[1],
    match[2],
    match[3] || '',
    match[4] || '',
  ];
}

module.exports = {
  sumArray,
  uniqueValues,
  minMax,
  shortenText,
  swapParts,
  parseUrlParts,
};