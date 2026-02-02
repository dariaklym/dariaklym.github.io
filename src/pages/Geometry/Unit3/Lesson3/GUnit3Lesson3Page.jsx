import "./GUnit3Lesson3Page.css";

function GUnit3Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Perimeter & Area</h1>

      <div className="lesson-box">
        <h4>Perimeter:</h4>
        <ul>
            <li>Sum of all sides</li>
            <li>Example: Rectangle l = 5, w = 3 → Perimeter = 5 + 3 + 5 + 3 = <b>16</b></li>
        </ul>

        <h4>Area Formulas:</h4>
        <ul>
            <li>Rectangle: l * w</li>
            <ul><li>l = length</li>
            <li>w = width</li></ul>
            <li>Triangle: (1/2) * b * h</li>
            <ul><li>b = base</li>
            <li>h = height</li></ul>
            <li>Parallelogram: b * h</li>
            <ul><li>b = base</li>
            <li>h = height</li></ul>
        </ul>
        <h4>Examples:</h4>
        <ul>
            <li>Triangle b = 6, h = 4 → Area = (1/2) * 6 * 4 = 12</li>
            <li>Parallelogram b = 8, h = 3 → Area = 8 * 3 = 24</li>
        </ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit3Lesson3Quiz")}
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

export default GUnit3Lesson3Page;