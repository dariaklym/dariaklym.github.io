import "./PAUnit1Lesson3Page.css";

function PAUnit1Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Subtracting Integers</h1>

      <div className="lesson-box">
        <h3>1. Rewrite Subtraction</h3>
        <ul>
            <li>
                 a - b = a + (opposite of b)
            </li>
        </ul>
        <p>Example: 6 - ( - 4) = 6 + 4 = 10</p>

        <h3>2. Rules</h3>
        <ul>
            <li>If the second number is negative --{`>`} subtraction becomes addition.</li>
            <li>If the second number is negative --{`>`} subtraction becomes addition.</li>
        </ul>
        
        <h3>3. Mixed Problems</h3>
        <p>Example: - 8 - 2 --{`>`} - 8 + ( - 2) = - 10 </p>
        <p>Example: - 5 - ( - 3) --{`>`} - 5 + 3 = - 2</p>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit1Lesson3Quiz")}
      >
        Take Quiz
      </button>
      
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
    
      <button
        className="lessons-btn"
        onClick={() => setCurrentPage("PAUnit1LessonsPage")}
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

export default PAUnit1Lesson3Page;