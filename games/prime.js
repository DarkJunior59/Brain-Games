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
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  return (isPrime(number)) ? 'yes' : 'no';
};

export { question, game };
