export default function getStudentIdsSum(list) {
  const all = Array.from(list);
  // let init = all[0]['id']
  return all.reduce(
    (prev, curr) => prev + curr.id, 0,
  );
}
