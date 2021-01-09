import gameEngine from '../src/index.js';
import generateNumber from '../src/random-number.js';

const question = 'What is the result of the expression?';

const generateArguments = () => {
  const operators = ['+', '-', '*'];
  const number1 = generateNumber(100);
  const number2 = generateNumber(100);
  const index = generateNumber(2);
  let solution = 0;
  switch (index) {
    case 0:
      solution = String(number1 + number2);
      break;
    case 1:
      solution = String(number1 - number2);
      break;
    default:
      solution = String(number1 * number2);
  }
  const task = `Question: ${number1} ${operators[index]} ${number2}`;
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateArguments);
