import gameEngine from '../index.js';
import generateNumber from '../random-number.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const task = generateNumber(100);
  const solution = isEven(task) ? 'yes' : 'no';
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateRound);
