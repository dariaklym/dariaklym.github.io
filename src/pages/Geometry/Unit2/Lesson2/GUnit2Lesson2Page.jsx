import "./GUnit2Lesson2Page.css";

function GUnit2Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Triangle Properties</h1>

      <div className="lesson-box">
        <h4>Angle Sum:</h4>
        <ul>
          <li>Sum of interior angles = 180 degrees</li>
          <li>Examples: 50 degrees + 60 degrees + ? = 180 degrees → Third angle = 70 degrees</li>
        </ul>
        <h4>Exterior Angle:</h4>
        <ul>
          <li>Exterior angle = sum of opposite inteior angles</li>
          <li>Example: Interior angles 50 degrees and 60 degrees → Exterior opposite = 50 + 60 = 110 degrees</li>
        </ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit2Lesson2Quiz")}
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

export default GUnit2Lesson2Page;