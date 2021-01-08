import gameEngine from '../src/index.js';
import randomNumber from '../src/random-number.js';

const question = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const game = () => {
  const number1 = randomNumber(100);
  const number2 = randomNumber(100);
  const solution = String(gcd(number1, number2));
  const task = `Question: ${number1} ${number2}`;
  const object = { task, solution };
  return object;
};

export default () => gameEngine(question, game);
