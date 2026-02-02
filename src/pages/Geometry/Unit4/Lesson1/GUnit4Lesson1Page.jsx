import "./GUnit4Lesson1Page.css";

function GUnit4Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Circle Basics</h1>

      <div className="lesson-box">
        <p><b>Circle:</b> All points equidistant from a center.</p>
       
        <h4>Key Terms:</h4>
        <ul>
          <li><b>Radius (r):</b> Distance from center to any point on the circle</li>
          <li><b>Diameter (d):</b> Twice the radius → d = 2 * r</li>
          <li><b>Chord:</b> Line connecting two points on the circle</li>
          <li><b>Tangent:</b> Line that touches the circle at exactly one point</li>
          <li><b>Secant:</b> Line that intersects the circle at two points</li>
        </ul>
        <h4>Example:</h4>
        <ul>
          <li>
            Radius = 5 → Diameter = 2 * 5 = 10
          </li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit4Lesson1Quiz")}
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

export default GUnit4Lesson1Page;