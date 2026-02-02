import "./GUnit5Lesson4Page.css";

function GUnit5Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Word Problems & Applications</h1>

      <div className="lesson-box">
        <p><b>Using distance, midpoint, and slope formulas in problems:</b></p>     
        <h4>Example 1:</h4> 
        <ul>
          <li>Points A(1,2), B(4,6) → Distance = √((4 - 1)² + (6 - 2)²) = √(9 + 16) = √25 = <b>5</b></li>
        </ul>
        <h4>Example 2:</h4> 
        <ul>
          <li>Points C(-2,0), D(2,4) → Midpoint = ((-2 + 2 ) / 2 , (0 + 4) / 2) = <b>(0,2)</b></li>
        </ul>
        <h4>Example 3:</h4> 
        <ul>
          <li>Points E(1,3), F(4,0) → Slope = (0 - 3)/(4 - 1) = -3 / 3 = <b>-1</b></li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit5Lesson4Quiz")}
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

export default GUnit5Lesson4Page;