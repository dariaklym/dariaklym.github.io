import "./PAUnit3Lesson1Page.css";

function PAUnit3Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 - Ratios</h1>

      

      <div className="lesson-box">
        <ul>A <b>ratio</b> compares two amounts.</ul>
      <ul>Examples:
        <ul><li>3 apples to 2 oranges --{`>`} 3:2 </li>
        <li>12 boys to 8 girls --{`>`} 12:8</li></ul>
      </ul><ul><h3>Ways to Write Ratios</h3>
      <ul>
        <li>a to b</li>
        <li>a:b</li>
        <li>a/b</li>
        </ul>
        <h3>Equivalent Ratios</h3>
        <ul><li>Multiply or divide both numbers.</li>
          <ul>Examples: 12:8 --{`>`} divide by 4 --{`>`} 3:2</ul></ul>
        <h3>Simplifying Ratios</h3>
        <ul><li>Divide by the GCF.</li>
        <ul>Example: 18:24 --{`>`} GCF is 6 --{`>`} 3:4</ul></ul>
      </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit3Lesson1Quiz")}
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
        onClick={() => setCurrentPage("PAUnit3LessonsPage")}
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

export default PAUnit3Lesson1Page;