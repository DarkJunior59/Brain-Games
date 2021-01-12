import promptly from 'promptly';

export default async (question, game) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log(question);
  const numberOfChecks = 3;
  for (let i = 0; i < numberOfChecks; i += 1) {
    const gameData = game();
    const gameTask = gameData.task;
    const gameSolution = gameData.solution;
    console.log(`Question: ${gameTask}`);
    const answer = await promptly.prompt('You answer:');
    if (gameSolution === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;( correct answer '${gameSolution}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
