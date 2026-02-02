import "./GUnit5Lesson2Page.css";

function GUnit5Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Distance & Midpoint Formulas</h1>

      <div className="lesson-box">
        <h4>Distance Formula:</h4>
        <ul>
          <li>Distance between points (x₁, y₁) and (x₂, y₂) = √((x₂ - x₁)² + (y₂ - y₁)²)</li>
        </ul>
        <h4>Midpoint Formula:</h4>
        <ul>
          <li>Midpoint of segment = ((x₁ + x₂) / 2 , (y₁ + y₂) / 2)</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Points A(1,2), B(5,6) → Distance = √((5 - 1)² + (6 - 2)²) = √(16 + 16) = √32 = <b>5.66</b></li>
          <li>Midpoint = ((1 + 5) / 2 , (2 + 6) / 2) = (3,4)</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit5Lesson2Quiz")}
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

export default GUnit5Lesson2Page;