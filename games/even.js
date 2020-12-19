export const game = () => {
  const number = Math.round(Math.random() * 100);
  const solution = (number % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  return solution;
};

export const question = 'Answer "yes" if the number is even, otherwise answer "no".';
