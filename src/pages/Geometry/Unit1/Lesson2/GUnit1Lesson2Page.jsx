import "./GUnit1Lesson2Page.css";

function GUnit1Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Angles</h1>

      <div className="lesson-box">
        <h4>Types of Angles:</h4>
        <ul>
          <li><b>Acute:</b> Less than 90 degrees</li>
          <li><b>Right:</b> Equal to 90 degrees</li>
          <li><b>Obtuse:</b> Greater than 90 degrees</li>
          <li><b>Straight:</b> Equal to 180 degrees</li>
        </ul>
        <h4>Angle Pairs:</h4>
        <ul>
          <li><b>Adjacent angles:</b> Share a vertex and a side</li>
          <li><b>Vertical angles:Opposite each other at an intersection; they are equal </b></li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit1Lesson2Quiz")}
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

export default GUnit1Lesson2Page;