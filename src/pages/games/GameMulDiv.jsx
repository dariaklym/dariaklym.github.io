import SpeedGame from "./SpeedGame";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  if (Math.random() < 0.5) {
    const a = randomInt(-12, 12);
    const b = randomInt(-12, 12);
    return {
      text: `${a} × ${b}`,
      answer: a * b
    };
  } else {
    const b = randomInt(1, 12);
    const answer = randomInt(-12, 12);
    const a = b * answer;
    return {
      text: `${a} ÷ ${b}`,
      answer
    };
  }
}

function checkAnswer(input, question) {
  return Number(input) === question.answer;
}

export default function GameMulDiv({setCurrentPage}) {
  return (
    <SpeedGame
      title="Multiplication & Division Speed Game"
      instructions="Solve as many multiplication and division problems as you can in 1 minute. Type your answer and press Enter."
      generateQuestion={generateQuestion}
      checkAnswer={checkAnswer}
      setCurrentPage={setCurrentPage}
    />
  );
}
