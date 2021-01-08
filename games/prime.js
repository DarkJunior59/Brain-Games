import gameEngine from '../src/index.js';
import randomNumber from '../src/random-number.js';

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

const game = () => {
  const number = randomNumber(100);
  const task = `Question: ${number}`;
  const solution = isPrime(number) ? 'yes' : 'no';
  const object = { task, solution };
  return object;
};

export default () => gameEngine(question, game);
