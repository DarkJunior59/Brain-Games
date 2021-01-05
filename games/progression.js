import randomNumber from '../src/random-number.js';

const question = 'What number is missing in the progression?';

const progressionLength = () => {
  const num = randomNumber(10);
  return (num >= 4 && num < 10) ? num : progressionLength();
};

const game = () => {
  const begin = randomNumber(100);
  const step = randomNumber(100) + 1;
  const leng = progressionLength();
  const items = [begin];
  const indexNum = randomNumber(leng);
  for (let i = 1; i <= leng; i += 1) {
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
  console.log(`Question: ${string}`);
  return solution;
};

export { question, game };
