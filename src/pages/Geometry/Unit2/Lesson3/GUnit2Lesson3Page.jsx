import "./GUnit2Lesson3Page.css";

function GUnit2Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Right Triangles & Pythagorean Theorem</h1>

      <div className="lesson-box">
        <h4>Right Triangle:</h4>
        <ul><li>One angle = 90 degrees</li></ul>
        <h4>Pythagorean Theorem:</h4>
        <ul><li>a² + b² = c², where c = hypotenuse</li></ul>
        <h4>Example:</h4>
        <ul><li>Legs: 3, 4 → Hypotenuse = √(3² + 4²) = 5</li></ul>
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit2Lesson3Quiz")}
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
        onClick={() => setCurrentPage("GUnit2LessonsPage")}
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

export default GUnit2Lesson3Page;