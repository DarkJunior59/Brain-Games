import gameEngine from '../index.js';
import generateNumber from '../random-number.js';

const question = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateArguments = () => {
  const number1 = generateNumber(100);
  const number2 = generateNumber(100);
  const solution = String(gcd(number1, number2));
  const task = `${number1} ${number2}`;
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateArguments);
