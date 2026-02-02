import "./GUnit2Lesson1Page.css";

function GUnit2Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Types of Triangles</h1>

      <div className="lesson-box">
        <h4>By Sides:</h4>
        <ul>
          <li><b>Equilateral:</b> All sides equal</li>
          <li><b>Isosceles:</b> Two sides equal</li>
          <li><b>Scalene:</b> No sides equal</li>
        </ul>
        <h4>By Angles:</h4>
        <ul>
          <li><b>Acute:</b> All angles less than 90 degrees</li>
          <li><b>Right:</b> One angle = 90 degrees</li>
          <li><b>Obtuse:</b> One angle greater than 90 degrees</li>
        </ul>
        <h4>Examples:</h4>
        <ul>
          <li>Triangle with sides 5, 5, 5 → Equilateral</li>
          <li>Triangle with sides 5, 5, 8 → Isosceles</li>
          <li>Triangle with angle degrees 40, 60, 80 → Acute</li>
        </ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit2Lesson1Quiz")}
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
        onClick={() => setCurrentPage("GUnit2LessonsPage")}
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

export default GUnit2Lesson1Page;