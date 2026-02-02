import "./GUnit5Lesson3Page.css";

function GUnit5Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Slope & Lines</h1>

      <div className="lesson-box">
        <h4>Slope Formula:</h4>
        <ul>
          <li>Slope (m) = (y₂ - y₁) / (x₂ - x₁)</li>
        </ul>
        <h4>Types of Slopes:</h4>
        <ul>
          <li><b>Positive:</b> rises left to right</li>
          <li><b>Negative:</b> falls left to right</li>
          <li><b>Zero:</b> horizontal line</li>
          <li><b>Undefined:</b> vertical line</li>
        </ul>
        <h4>Line Equation:</h4>
        <ul>
          <li>y = mx + b, where m = slope, b = y-intercept</li>
        </ul>
      <h4>Example:</h4>
      <ul>
        <li>Points (1,2), (3,6) → Slope = (6 - 2) / (3 - 1) = 4 / 2 = <b>2</b></li>
        <li>Equation passing through y-intercept 0: <b>y = 2x</b></li>
      </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit5Lesson3Quiz")}
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
        onClick={() => setCurrentPage("GUnit5LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("GeometryUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default GUnit5Lesson3Page;