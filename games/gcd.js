const question = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const solution = String(gcd(number1, number2));
  console.log(`Question: ${number1} ${number2}`);
  return solution;
};

export { question, game };
