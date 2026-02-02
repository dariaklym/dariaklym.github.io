import "./PAUnit5Lesson4Page.css";

function PAUnit5Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 - Solving Inequalities & Graphing on a Number Line</h1>

      

      <div className="lesson-box">
        <ul>
            <li>AN <b>inequality</b> compares two values using:<br />
            </li>{`<, >, ≤, ≥`}
            <li>Solve inequalities similar to equations</li>

            <b>Rule:</b>
            <ul>If you multiply or divide by a negative number → <b>flip the inequality sign.</b></ul>
            <b>Examples:</b>
            <ul>1) x + 4 {`<`} 10 → x {`<`} 6 </ul>
            <ul>2) -2x ≥ 8 → divide by -2 → x  ≤ -4</ul>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit5Lesson4Quiz")}
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
        onClick={() => setCurrentPage("PAUnit5LessonsPage")}
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

export default PAUnit5Lesson4Page;