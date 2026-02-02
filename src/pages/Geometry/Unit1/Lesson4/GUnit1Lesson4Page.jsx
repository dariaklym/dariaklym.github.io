import "./GUnit1Lesson4Page.css";

function GUnit1Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Midpoints & Segment Addition</h1>

      <div className="lesson-box">
        <h4>Midpoint of a Segment:</h4>
        <ul>
          <li>Midpoint = average of x-coordinates, average of y-coordinates</li>
          <li>Example: A(2,3), B(6,7) → Midpoint = ((2+6)/2, (3+7)/2) = <b>(4,5)</b></li>
        </ul>
        <h4>Segment Addition:</h4>
        <ul>
          <li>AB + BC = AC</li>
          <li>Example: AB = 3, BC = 5 → AC = 8</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit1Lesson4Quiz")}
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
        onClick={() => setCurrentPage("GUnit1LessonsPage")}
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

export default GUnit1Lesson4Page;