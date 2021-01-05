import randomNumber from '../src/random-number.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = randomNumber(100);
  const solution = (number % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  return solution;
};

export { question, game };
