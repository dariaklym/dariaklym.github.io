import "./AUnit1Lesson1Page.css";

function AUnit1Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Variables & Expressions</h1>

      <div className="lesson-box">
        <h4>1. Understanding Variables</h4>
        <ul><li>A <b>variable</b> is a letter that represents a number we don't know yet</li>
        <li>Example: x + 5 → <b>x</b> is the <b>variable</b></li></ul>
        <h4>2. Writing Expressions from Words</h4>
        <ul><li>Translate words into algebra:</li>
        <ul><li>"The sum of a number and 7"  → <b>x + 7</b></li>
        <li>"3 more than twice a number" → <b>2x + 3</b></li></ul></ul>
        <h4>3. Evaluating Expressions</h4>
        <ul><li>Substitute a number for the variable and calculate:</li>
        <li>Example: Evaluate x + 5 if x = 3 → 3 + 5 = <b>8</b></li>
        <li>Example: Evaluate 2y - 4 if y = 6 → (2 * 6) - 4 = <b>8</b></li></ul>
       
      
      </div>

      
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("AUnit1Lesson1Quiz")}
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

export default AUnit1Lesson1Page;