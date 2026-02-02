import "./GUnit3Lesson4Page.css";

function GUnit3Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Mixed Problems</h1>

      <div className="lesson-box">
        <h4>Combining Polygons:</h4>
        <ul>
          <li>Use formulas for perimeter and area step by step</li>
          <li>Example: Rectangle l = 5, w = 3; Triangle b = 4, h = 3; What is the combined area?</li>
          <ul>
            <li>Combined area = 5 * 3 + (1/2) * 4 * 3 = 15 + 6 = <b>21</b></li>
          </ul>
        </ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit3Lesson4Quiz")}
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

export default GUnit3Lesson4Page;