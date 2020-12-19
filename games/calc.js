const question = 'What is the result of the expression?';

const game = () => {
  const znak = ['+', '-', '*'];
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const index = Math.round(Math.random() * 2);
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
  console.log(`Question: ${number1} ${znak[index]} ${number2}`);
  return solution;
};

export { question, game };
