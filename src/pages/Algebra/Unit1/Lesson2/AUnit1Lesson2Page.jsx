import "./AUnit1Lesson2Page.css";

function AUnit1Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 - Order of Operations Review</h1>

      <div className="lesson-box">
          <h4>1. PEMDAS with Variables</h4>
          <ul><li>Follow <b>Paretheses, Exponents, Multiplication/Division, Addition/Subtraction.</b></li>
          <li>Example: 2 + 3 * x → multiply first, the add.</li></ul>
          <h4>2. Simplifying Expressions</h4>
          <ul><li>Simplify step by step usig PEMDAS:</li>
          <ul><li>Example: 2 + 3 * (x + 4) → 2 + 3x + 12 → <b>3x + 14</b></li></ul>
          </ul><h4>3. Step by Step Examples</h4>
          <ul><li>5 + 2x * (y - 1) if y = 3:</li>
          <ul>~ Step 1: 5 + 2 * (3 - 1)</ul><br />
          <ul>~ Step 2: 5 + 2 * 2</ul><br />
          <ul>~ Step 3: 5 + 4 = 9</ul><br /></ul>
        
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit1Lesson2Quiz")}
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

export default AUnit1Lesson2Page;