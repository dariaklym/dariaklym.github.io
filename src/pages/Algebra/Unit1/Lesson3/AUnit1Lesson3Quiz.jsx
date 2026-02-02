import React, { useState } from "react";
import "./AUnit1Lesson3Quiz.css";
import { AUnit1Lesson3Questions } from "./AUnit1Lesson3QuizData";

export default function AUnit1Lesson3Quiz({ setCurrentPage }) {

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (questionId, choice) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: choice
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Lesson 3 Quiz</h1>

      {AUnit1Lesson3Questions.map((q) => (
        <div key={q.id} className="question-box">
          <h2 className="question-text">{q.question}</h2>

          <div className="options-container">
            {q.options.map((opt) => (
              <button
                key={opt}
                className={`option-btn ${userAnswers[q.id] === opt ? "selected" : ""}`}
                onClick={() => handleOptionClick(q.id, opt)}
                disabled={submitted}
              >
                {opt}
              </button>
            ))}
          </div>

          {submitted && (
            <p
              className={`feedback ${
                userAnswers[q.id] === q.answer ? "correct" : "incorrect"
              }`}
            >
              {userAnswers[q.id] === q.answer
                ? "Correct!"
                : `Incorrect. Correct answer: ${q.answer}`}
            </p>
          )}
        </div>
      ))}

      {!submitted && (
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Answers
        </button>
      )}

   
      
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
    
      <button
        className="lessons-btn"
        onClick={() => setCurrentPage("AUnit1LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("AlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}
