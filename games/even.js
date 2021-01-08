import gameEngine from '../src/index.js';
import randomNumber from '../src/random-number.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const game = () => {
  const number = randomNumber(100);
  const solution = isEven(number) ? 'yes' : 'no';
  const task = `Question: ${number}`;
  const object = { task, solution };
  return object;
};

export default () => gameEngine(question, game);
