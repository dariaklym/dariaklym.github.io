import "./GUnit4Lesson2Page.css";

function GUnit4Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Arcs & Circumference</h1>

      <div className="lesson-box">

        <p><b>Circumference:</b> Distance around the circle</p>
        <ul>
          <li>Formula: C = 2πr</li>
        </ul>
        <p><b>Arc Length:</b> Part of the circumference</p>
        <ul>
          <li>Formula: Arc length = (θ / 360) * 2πr, where θ = central angle in degrees</li>
        </ul>
        <p><b>Example:</b></p>
        <ul>
          <li>Radius = 6, angle = 90 degrees → Arc length = (90 / 360) * 2 * π *  6 = <b>9.42</b></li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit4Lesson2Quiz")}
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
        onClick={() => setCurrentPage("GUnit4LessonsPage")}
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

export default GUnit4Lesson2Page;