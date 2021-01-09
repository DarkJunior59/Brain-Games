import gameEngine from '../src/index.js';
import generateNumber from '../src/random-number.js';

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
  const number = generateNumber(100);
  const task = `Question: ${number}`;
  const solution = isPrime(number) ? 'yes' : 'no';
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateArguments);
