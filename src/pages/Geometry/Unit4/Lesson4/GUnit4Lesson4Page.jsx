import "./GUnit4Lesson4Page.css";

function GUnit4Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 — Tangent & Chord Problems</h1>

      <div className="lesson-box">
        <h4>Key Concepts:</h4>
        <ul>
          <li>Tangent forms a <b>right angle</b> with the radius at the point of contact</li>
          <li>Chord properties: Bisects or divides circle segments</li>
          <li>Use numeric calculations for distance or lengths</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>Circle radius = 5, tangent touches at point → forms 90 degrees with radius</li>
        </ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit4Lesson4Quiz")}
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

export default GUnit4Lesson4Page;