export function getRangeValues(from, to) {
  let values = [];

  for (let index = from; index <= to; index++) {
    values.push(index);
  }

  return values;
}
