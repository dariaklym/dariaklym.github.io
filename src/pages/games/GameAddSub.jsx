import SpeedGame from "./SpeedGame";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const a = randomInt(-50, 50);
  const b = randomInt(-50, 50);
  const op = Math.random() < 0.5 ? "+" : "-";

  return {
    text: `${a} ${op} ${b}`,
    answer: op === "+" ? a + b : a - b
  };
}

function checkAnswer(input, question) {
  return Number(input) === question.answer;
}

export default function GameAddSub({setCurrentPage}) {
  return (
    <SpeedGame
      title="Addition & Subtraction Speed Game"
      instructions="Solve as many addition and subtraction problems as you can in 1 minute. Type your answer and press Enter."
      generateQuestion={generateQuestion}
      checkAnswer={checkAnswer}
      setCurrentPage={setCurrentPage}
    />
   

  );
  
}

