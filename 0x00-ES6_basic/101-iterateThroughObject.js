export default function iterateThroughObject(reportWithIterator) {
  const list = [];
  for (const item of reportWithIterator) {
    list.push(item);
  }
  return list.join(' | ');
}
