import randomNumber from '../src/random-number.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const game = () => {
  const number = randomNumber(100);
  const solution = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  return solution;
};

export { question, game };
