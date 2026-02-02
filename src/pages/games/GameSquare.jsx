import SpeedGame from "./SpeedGame";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const n = randomInt(0, 30);
  return {
    text: `${n}²`,
    answer: n ** 2
  };
}

function checkAnswer(input, question) {
  return Number(input) === question.answer;
}

export default function GameSquare({setCurrentPage}) {
  return (
    <SpeedGame
      title="Square Speed Game"
      instructions="Find the square of each number. Type your answer and press Enter. You have 1 minute."
      generateQuestion={generateQuestion}
      checkAnswer={checkAnswer}
      setCurrentPage={setCurrentPage}
    />
  );
}
