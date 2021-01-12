import gameEngine from '../index.js';
import generateNumber from '../random-number.js';

const question = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = generateNumber(100);
  const number2 = generateNumber(100);
  const index = generateNumber(operators.length - 1);
  let result = 0;
  switch (index) {
    case 0:
      result = number1 + number2;
      break;
    case 1:
      result = number1 - number2;
      break;
    case 2:
      result = number1 * number2;
      break;
    default:
      throw new Error('Non-existent element');
  }
  const solution = `${result}`;
  const task = `${number1} ${operators[index]} ${number2}`;
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateRound);
