function firstWord(str) {
  // Trim leading and trailing whitespace
  str = str.trim();

  // If string is empty, return empty string
  if (str === '') return '';

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If no space is found, return the whole string
  if (spaceIndex === -1) return str;

  // Otherwise, return substring up to the first space
  return str.slice(0, spaceIndex);
}

