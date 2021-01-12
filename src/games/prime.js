import gameEngine from '../index.js';
import generateNumber from '../random-number.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateArguments = () => {
  const task = generateNumber(100);
  const solution = isPrime(task) ? 'yes' : 'no';
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateArguments);
