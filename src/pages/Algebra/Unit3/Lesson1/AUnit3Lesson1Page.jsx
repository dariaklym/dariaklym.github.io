import "./AUnit3Lesson1Page.css";

function AUnit3Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Writing Inequalities</h1>

      <div className="lesson-box">
        
          <h4>1. Using {`>`}, {`<`},  ≥, ≤</h4>
            <ul><li>{`>`} means <b>greater</b> than, {`<`} means <b>less</b> than</li>
            <li> ≥ means <b>greather</b> than or equal to, ≤ means <b>less</b> than or equal to</li>
          </ul><h4>2. Translating Words to Inequalities</h4>
            <ul><li>Example: "x is more than 7" → x {`>`} 7</li>
            <li>Example: "y is at most 12" → y ≤ 12</li>
          </ul><h4>3. Practice</h4>
          <ul><li>"The temperature is below 30 degrees" → T {`<`} 30</li>
          <li>"You need at least 5 points to pass" → p ≥ 5</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit3Lesson1Quiz")}
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
        onClick={() => setCurrentPage("AUnit3LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("AlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default AUnit3Lesson1Page;