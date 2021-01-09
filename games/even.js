import gameEngine from '../src/index.js';
import generateNumber from '../src/random-number.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateArguments = () => {
  const number = generateNumber(100);
  const solution = isEven(number) ? 'yes' : 'no';
  const task = `Question: ${number}`;
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateArguments);
