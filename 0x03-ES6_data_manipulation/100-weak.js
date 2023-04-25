export const weakMap = new WeakMap();
const max = 5;

export function queryAPI(url) {
  if (!weakMap.has(url)) {
    weakMap.set(url, 0);
  }
  weakMap.set(url, weakMap.get(url) + 1);
  if (weakMap.get(url) >= max) {
    throw new Error('Endpoint load is high');
  }
}
