import promptly from 'promptly';

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 2; i >= 0; i -= 1) {
    const number = Math.round(Math.random() * 100);
    const solution = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = await promptly.prompt('You answer:');
    if (solution === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;( correct answer '${solution}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
