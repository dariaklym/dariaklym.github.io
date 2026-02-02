import "./AUnit1Lesson3Page.css";

function AUnit1Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 - Combining Like Terms</h1>

      <div className="lesson-box">
        <h4>1. Identifying Like vs Unlike Terms</h4>
        <ul><li><b>Like terms</b> have the same variable and exponent: 3x and 5x</li>
        <li><b>Unlike terms</b> cannot be combined: 3x and 4y</li></ul>
        <h4>2. Adding/Subtracting Terms</h4>
        <ul><li>Add coefficients only: 3x + 5x = 8x</li>
        <li>Subtract similarly: 7y - 2y = 5y</li></ul>
        <h4>3. Simplifying Expressions</h4>
        <ul><li>Example: 2x + 3 + 4x + 5 → combine 2x + 4x = <b>6x</b> and 3 + 5 = <b>8</b> → <b>6x + 8</b></li></ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit1Lesson3Quiz")}
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

export default AUnit1Lesson3Page;