import SpeedGame from "./SpeedGame";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const n = randomInt(0, 15);
  return {
    text: `${n}³`,
    answer: n ** 3
  };
}

function checkAnswer(input, question) {
  return Number(input) === question.answer;
}

export default function GameCube({setCurrentPage}) {
  return (
    <SpeedGame
      title="Cube Speed Game"
      instructions="Find the cube of each number. Type your answer and press Enter. You have 1 minute."
      generateQuestion={generateQuestion}
      checkAnswer={checkAnswer}
      setCurrentPage={setCurrentPage}
    />
  );
}
