import "./GUnit1Lesson3Page.css";

function GUnit1Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Measuring Angles</h1>

      <div className="lesson-box">
        <h4>Measuring Angles:</h4>
        <ul>
          <li>Angles are measured in degrees.</li>
          <li>Example: Angle ABC = 60 degrees</li>
        </ul>
        <h4>Special Angle Pairs:</h4>
        <ul>
          <li><b>Complementary angles:</b> Sum = 90 degrees</li>
          <li><b>Supplementary angles:</b> Sum = 180 degrees</li>
        </ul>
        <h4>Examples:</h4>
        <ul>
          <li>Angle 1 = 30 degrees, Angle 2 = ? → 60 degrees (complementary)</li>
          <li>Angle 1 = 110 degrees, Angle 2 = ? → 70 degrees (supplementary)</li>
        </ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit1Lesson3Quiz")}
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

export default GUnit1Lesson3Page;