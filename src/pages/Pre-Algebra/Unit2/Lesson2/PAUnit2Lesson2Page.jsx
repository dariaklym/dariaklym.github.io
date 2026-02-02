import "./PAUnit2Lesson2Page.css";

function PAUnit2Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Fraction Operations</h1>

      <div className="lesson-box">
        <h3>1. Common Denominators (for + and -)</h3>
        <ul><li>To add or subract fractions, denominators must match.</li>
        <li>Find the LCM (least common multiple)</li>
        <ul>Example: 1/4 + 1/6 --{`>`} LCM = 12 --{`>`} convert --{`>`} 3/12 + 2/12 = 5/12</ul></ul>

        <h3>2. Adding Fractions</h3>
        <ul><li>Convert --{`>`} add numerators --{`>`} keep denominator</li>
        <ul>Example: 3/8 + 1/8 = 4/8 = 1/2</ul></ul>

        <h3>2. Adding Fractions</h3>
        <ul><li>Same idea as adding.</li>
        <ul>Example: 5/6 - 1/3 --{`>`} 1/3 = 2/6 --{`>`} 5/6 - 2/6 = 3/6 = 1</ul></ul>

        <h3>4. Multiplying Fractions</h3>
        <ul><li>Multiply numerator * numerator</li>
        <li>Multiply denominator * denominator</li>
        <ul>Example: 2/3 * 4/5 = 8/15</ul></ul>

        <h3>5. Dividing Fractions</h3>
        <ul><li>Multiply by the reciprocal.</li>
        <ul>Example: (3/4) / (2/5) = (3/4) * (5/2) = 15/8</ul></ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit2Lesson2Quiz")}
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
        onClick={() => setCurrentPage("PAUnit2LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("PreAlgebraUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default PAUnit2Lesson2Page;
