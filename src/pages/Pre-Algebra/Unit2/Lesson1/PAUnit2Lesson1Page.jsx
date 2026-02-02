import "./PAUnit2Lesson1Page.css";

function PAUnit2Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — What Fractions mean</h1>

      <div className="lesson-box">
        <h3>1. Numerator / Denominator</h3>
        <p>A fraction has two parts: </p>
        <ul>
          <li>Numerator --{`>`} number of parts you have</li>
          <li>Denominator --{`>`} number of equal parts in the whole</li>
          <ul>Example: 3/4 means 3 parts out of 4 equal parts</ul>
        </ul>

        <h3>2. Proper, Improper, Mixed</h3>
        <ul>
          <li>Proper fraction: numerator {`<`} denominator (3/5)</li>
          <li>Improper fraction: numerator {`>`} denominator (9/4)</li>
          <li>Mixed number: whole number + fraction (2 1/4)</li>
        </ul>

        <h3>3. Equivalent Fractions</h3>
        <ul>
          <li>Fractions that name the same amount.</li>
          <ul>Example: 1/2 = 2/4 = 3/6</ul>
          <li>Multiply or divide the numerator and denominator by the same number</li>  
        </ul>

        <h3>4. Simplifying Fractions</h3>
        <ul><li>Divide numerator and denominator by the greatest common factor (GCF).</li></ul>
        <ul><ul>Example: 12/18 --{`>`} divide both by 6 --{`>`} 2/3</ul></ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit2Lesson1Quiz")}
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

export default PAUnit2Lesson1Page;
