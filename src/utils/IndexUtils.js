export const isSquare = (index) =>
  index === 0 || index === 8 || index === 72 || index === 80;

export const isInner = (index) => {
  const divide = Math.floor(index / 9);
  const remainder = index % 9;
  return divide !== 0 && divide !== 8 && remainder !== 0 && remainder !== 8;
};
