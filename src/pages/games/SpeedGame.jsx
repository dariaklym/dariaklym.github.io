import { useEffect, useState } from "react";
import "./SpeedGame.css";

function SpeedGame({ 
  title, 
  instructions, 
  generateQuestion, 
  checkAnswer,
  setCurrentPage
}) {
  const [screen, setScreen] = useState("instructions"); // instructions | game | results
  const [question, setQuestion] = useState(null);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  // Start game
  function startGame() {
    setScore(0);
    setTimeLeft(60);
    setQuestion(generateQuestion());
    setInput("");
    setScreen("game");

  }

  // timer
  useEffect(() => {
    if (screen !== "game") return;

    if (timeLeft === 0) {
      setScreen("results");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, screen]);

  // enter key 
  function handleKeyDown(e) {
    if (e.key === "Enter") submitAnswer();
  }

  function submitAnswer() {
    if (checkAnswer(input, question)) {
      setScore((s) => s + 1);
    }
    setInput("");
    setQuestion(generateQuestion());
  }

  // screens
  if (screen === "instructions") {
    return (
      <div className="speedgame-container">
        <h1>{title}</h1>
        <p className="speedgame-instructions">{instructions}</p>
        <button className="speedgame-btn" onClick={startGame}>
          Start
        </button>

        <button 
            className="Home-btn"
            onClick={() => setCurrentPage("HomePage")}
        >
            Home
        </button>
      </div>
    );
  }

  if (screen === "results") {
    return (
      <div className="speedgame-container">
        <h1>Time's Up!</h1>
        <p className="speedgame-score">
          Correct Answers: <strong>{score}</strong>
        </p>
        <button className="speedgame-btn" onClick={startGame}>
          Try Again
        </button>

        <button 
            className="Home-btn"
            onClick={() => setCurrentPage("HomePage")}
        >
            Home
        </button>
      </div>
    );
  }

  // game screen
  return (
    <div className="speedgame-container">
      <div className="speedgame-header">
        <span>Time: {timeLeft}s</span>
        <span>Score: {score}</span>
        <button 
            className="Home-btn"
            onClick={() => setCurrentPage("HomePage")}
        >
            Home
        </button>
      </div>

      <div className="speedgame-question">
        {question.text}
      </div>

      <input
        className="speedgame-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
   

    </div>
    
  );
}

export default SpeedGame;
