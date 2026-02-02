import "./GUnit3Lesson2Page.css";

function GUnit3Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Other Polygons </h1>

      <div className="lesson-box">
        <h4>Polygons:</h4>
        <ul>
          <li><b>Pentagon:</b> 5 sides</li>
          <li><b>Hexagon:</b> 6 sides</li>
          <li><b>Octagon:</b> 8 sides</li>
        </ul>
        <h4>Sum of Interior Angles:</h4>
        <ul>
          <li>Formula: (n - 2) * 180</li>
          <li>Example: Hexagon → (6 - 2) * 180 = 720 degrees</li>
        </ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit3Lesson2Quiz")}
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
        onClick={() => setCurrentPage("GUnit3LessonsPage")}
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

export default GUnit3Lesson2Page;