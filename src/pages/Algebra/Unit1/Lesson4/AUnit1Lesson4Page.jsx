import "./AUnit1Lesson4Page.css";

function AUnit1Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 - Distributive Property</h1>

      <div className="lesson-box">
        <h4>1. Distributive Property</h4>
        <ul><li>a(b + c) = ab + ac</li></ul>
        <h4>2. Expanding Expressions</h4>
        <ul><li>Example: 3(x + 4) → 3x + 12</li>
        <li>Example: 2(2y - 5) → 4y - 10</li></ul>
        <h4>3. Combining Like Terms After Distributing</h4>
        <ul><li>Example: 2(x + 3) + 4x → 2x + 6 + 4x = <b>6x + 6</b></li>
        </ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit1Lesson4Quiz")}
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
        onClick={() => setCurrentPage("AUnit1LessonsPage")}
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

export default AUnit1Lesson4Page;