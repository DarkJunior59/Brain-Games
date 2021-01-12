export default (max, min = 1) => {
  const num = Math.round(Math.random() * max);
  return num < min ? min : num;
};
