import React, { useState } from "react";
import "./PAUnit6Lesson4Quiz.css";
import { PAUnit6Lesson4Questions } from "./PAUnit6Lesson4QuizData";

export default function PAUnit6Lesson4Quiz({ setCurrentPage }) {

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
      <h1 className="quiz-title">Lesson 1 Quiz</h1>

      {PAUnit6Lesson4Questions.map((q) => (
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
        onClick={() => setCurrentPage("PAUnit6LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("PreAlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}
