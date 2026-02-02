import "./GUnit4Lesson3Page.css";

function GUnit4Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Area of Circles & Sectors</h1>

      <div className="lesson-box">
        <h4>Circle Area:</h4>
        <ul>
          <li>Formula: A = πr²</li>
        </ul>
        <h4>Sector Area:</h4>
        <ul>
          <li>Fraction of circle area: Sector area = (θ / 360) * πr²
</li>
        </ul>
      <h4>Example:</h4>
      <ul>
        <li>
          Radius = 5 → Area = π * 5² = 25π
        </li>
        <li>
          Central angle = 90 degrees → Sector area = (90 / 360) * 25π = 6.25π
        </li>
      </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit4Lesson3Quiz")}
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

export default GUnit4Lesson3Page;