import gameEngine from '../index.js';
import generateNumber from '../random-number.js';

const question = 'What number is missing in the progression?';

const generateRound = () => {
  const begin = generateNumber(100);
  const step = generateNumber(100) + 1;
  const length = generateNumber(9, 4);
  const items = [];
  const indexNum = generateNumber(length);
  for (let i = 1; i <= length; i += 1) {
    items[i] = begin + step * i;
  }
  const randomNumOfItems = items[indexNum];
  const newItems = [...items];
  const emptyValue = '..';
  newItems[indexNum] = emptyValue;
  const task = newItems.join(' ');
  const solution = String(randomNumOfItems);
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateRound);
