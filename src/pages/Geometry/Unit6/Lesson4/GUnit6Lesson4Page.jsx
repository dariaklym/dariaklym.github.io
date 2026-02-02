import "./GUnit6Lesson4Page.css";

function GUnit6Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Composite Solids & Mixed Problems</h1>

      <div className="lesson-box">
        <p><b>Step 1:</b> Identify individual solids (cube, prism, cylinder)</p>
        <p><b>Step 2:</b> Calculate surface area or volume for each</p>
        <p><b>Step 3:</b> Combine using addition or subtraction</p>
        <h4>Example 1:</h4>
        <ul>
          <li>Cube side 3 + Rectangular prism l = 2, w = 3, h = 4 → Volume = 27 + 24 = <b>51</b></li>
        </ul>
        <h4>Example 2:</h4>
        <ul>
          <li>Cylinder r = 2, h = 5 + Cube side 3 → Volume = <b>20π + 27</b></li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit6Lesson4Quiz")}
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
        onClick={() => setCurrentPage("GUnit6LessonsPage")}
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

export default GUnit6Lesson4Page;