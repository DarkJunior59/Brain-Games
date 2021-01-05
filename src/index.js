import promptly from 'promptly';

export default async (question, game) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log(question);
  for (let i = 0; i < 3; i += 1) {
    const solution = game();
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
