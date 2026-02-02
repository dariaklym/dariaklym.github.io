import "./GUnit3Lesson1Page.css";

function GUnit3Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Variables & Expressions</h1>

      <div className="lesson-box">
        <h4>Quadrilaterals:</h4>
        <ul>
          <li><b>Square:</b> All sides equal, all angles 90 degrees</li>
          <li><b>Rectangle:</b> Opposite sides equal, all angles 90 degrees</li>
          <li><b>Parallelogram:</b> Opposite sides equal and parallel, opposite angles equal</li>
          <li><b>Trapezoid:</b> One pair of opposite sides parallel</li>
          <li><b>Rhombus:</b> All sides equal, opposite angles equal</li>
        </ul>
        <h4>Examples:</h4>
        <ul>
          <li>Square sides = 4 → Perimeter = 16</li>
          <li>Rectangle l = 5, w = 3 → Area = l * w = 15</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit3Lesson1Quiz")}
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

export default GUnit3Lesson1Page;