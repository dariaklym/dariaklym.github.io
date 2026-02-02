import { useState } from "react";
import diagnosticQuestions from "./diagnosticQuestions";
import "./DTestPage.css";

function DTestPage({ setCurrentPage, setDiagnosticResults }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = diagnosticQuestions[current];

  function handleAnswer(choiceIndex) {
    const updatedAnswers = [...answers];

    // stores full question metadata
    updatedAnswers[current] = {
      correct: choiceIndex === question.correct,
      course: question.course,
      unit: question.unit,
      
      lessonTitle: question.lessonTitle
    };

    setAnswers(updatedAnswers);

    // move to the question or finish
    if (current < diagnosticQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDiagnosticResults(updatedAnswers);
      setCurrentPage("DTestResults");
    }
  }

  return (
    <div className="dtest-container">
      <h1 className="dtest-title">Math Diagnostic Test</h1>

      <div className="dtest-progress">
        Question {current + 1} of {diagnosticQuestions.length}
      </div>

      <div className="dtest-question-box">
        <p className="dtest-question">{question.question}</p>

        {question.choices.map((choice, index) => (
          <button
            key={index}
            className="dtest-choice"
            onClick={() => handleAnswer(index)}
          >
            {choice}
          </button>

          
        ))}
       <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
      </div>
    </div>
  );
}

export default DTestPage;


