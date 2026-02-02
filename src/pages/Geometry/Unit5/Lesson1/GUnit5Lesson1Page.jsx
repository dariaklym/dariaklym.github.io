import "./GUnit5Lesson1Page.css";

function GUnit5Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Points on Plane</h1>

      <div className="lesson-box">
        <p><b>Coordinates:</b> A point is represented as (x, y), where x = horizontal position, y = vertical position.</p>
        <h4>Quadrants:</h4>
        <ul>
          <li><b>Quadrant I:</b> x {`>`} 0, y {`>`} 0</li>
          <li><b>Quadrant II:</b> x {`<`} 0, y {`>`} 0</li>
          <li><b>Quadrant III:</b> x {`<`} 0, y {`<`} 0</li>
          <li><b>Quadrant IV:</b> x {`>`} 0, y {`<`} 0</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Point (3, 4) → Quadrant I</li>
          <li>Point (-2, 5) → Quadrant II</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit5Lesson1Quiz")}
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

export default GUnit5Lesson1Page;