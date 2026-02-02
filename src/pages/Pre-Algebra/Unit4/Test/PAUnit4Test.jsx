import React, { useState } from "react";
import "./PAUnit4Test.css";
import { PAUnit4TestQuestions } from "./PAUnit4TestData";

export default function PAUnit4Test({ setCurrentPage }) {

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
    <div className="test-container">
      <h1 className="test-title">Unit 4 Test</h1>

      {PAUnit4TestQuestions.map((q) => (
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
        className="units-btn"
        onClick={() => setCurrentPage("PreAlgebraUnitsPage")}
      >
        Back to Units
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
