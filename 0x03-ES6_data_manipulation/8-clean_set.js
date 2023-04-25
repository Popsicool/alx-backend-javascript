export default function cleanSet(set, startString) {
  const string = [];
  if (!startString || !set || !(set instanceof Set) || (typeof (startString) !== 'string')) {
    return '';
  }
  for (const element of set.values()) {
    if (element.startsWith(startString)) {
      string.push(element.slice(startString.length));
    }
  }
  return string.join('-');
}
