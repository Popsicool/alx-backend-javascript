export default function updateUniqueItems(inp) {
  if (!(inp instanceof Map)) {
    throw new Error('Cannot process');
  }
  inp.forEach((v, k) => {
    if (v === 1) {
      inp.set(k, 100);
    }
  });
}
