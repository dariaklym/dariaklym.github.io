import "./GUnit1Lesson1Page.css";

function GUnit1Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Variables & Expressions</h1>

      <div className="lesson-box">
        <h4>Points:</h4>
        <ul><li>A <b>point</b> represents a location in space.</li>
        <li>Labeled with a vapital letter</li>
        <li>Example: A, B, C</li></ul>
        <h4>Lines:</h4>
        <ul>
          <li>Extend infinitely in both directions.</li>
          <li>Can be labeled with two points on the line.</li>
          <li>Example: line AB</li>
        </ul>
        <h4>Line Segments:</h4>
        <ul>
          <li>Part of a line with two endpoints.</li>
          <li>Example: segment AB has endpoints A and B.</li>
        </ul>
        <h4>Rays:</h4>
        <ul>
          <li>Start at one endpoint and extend infinitely in one direction.</li>
          <li>Example: ray AB starts at A and goes through B infinitely.</li>
        </ul>
        <h4>Planes:</h4>
        <ul>
          <li>Flat surfaces that extend infinitely.</li>
          <li>Labeled with three points not on the same line.</li>
          <li>Example: plane ABC</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit1Lesson1Quiz")}
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

export default GUnit1Lesson1Page;