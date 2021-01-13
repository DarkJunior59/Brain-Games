export default (max, min = 0) => {
  const num = Math.round(Math.random() * max);
  return num < min ? min : num;
};
