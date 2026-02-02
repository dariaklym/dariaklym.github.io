import "./PAUnit1Lesson4Page.css";

function PAUnit1Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Multiplying / Dividing Integers</h1>

      <div className="lesson-box">
        <h3>1. Multiplication Sign Rules</h3>
        <ul>
            <li>Positive * Positive = Positive</li>
            <li>Negative * Negative = Positive</li>
            <li>Positive * Negative = Negative</li>
        </ul>

        <h3>2. Division Sign Rules</h3>
        <ul>
            <li>Same rules as multiplication</li>
        </ul>

        <h3>3. Zero Rules</h3>
        <ul>
            <li>0 * anything = 0</li>
            <li>Division by 0 is not allowed</li>
        </ul>

        <h3>4. Multi-Step Operations</h3>
        <ul>
            <li>Work left to right</li>
        </ul>
        <p>Example: - 2 * 3 * - 4</p>
        <h4>Step 1: </h4>
        <p>- 2 * 3 = - 6</p>
        <h4>Step 2: </h4>
        <p>- 6 * - 4 = 24</p>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit1Lesson4Quiz")}
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

export default PAUnit1Lesson4Page;