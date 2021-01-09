import gameEngine from '../src/index.js';
import generateNumber from '../src/random-number.js';

const question = 'What number is missing in the progression?';

const createLength = () => {
  const num = generateNumber(10);
  return (num < 5) ? 5 : num;
};

const generateArguments = () => {
  const begin = generateNumber(100);
  const step = generateNumber(100) + 1;
  const length = createLength();
  const items = [begin];
  const indexNum = generateNumber(length);
  for (let i = 1; i <= length; i += 1) {
    items[i] = items[i - 1] + step;
  }
  const randomNumOfItems = items[indexNum];
  const progressionWithoutNum = [];
  const emptyValue = '..';
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === randomNumOfItems) {
      progressionWithoutNum[i] = emptyValue;
    } else {
      progressionWithoutNum[i] = items[i];
    }
  }
  const string = progressionWithoutNum.join(' ');
  const solution = String(randomNumOfItems);
  const task = `Question: ${string}`;
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateArguments);
