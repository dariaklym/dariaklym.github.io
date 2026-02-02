import "./PAUnit5Lesson3Page.css";

function PAUnit5Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 - Writing and Solving 2-Step Equations</h1>

      

      <div className="lesson-box">
        <ul>
            <li><b>2-step equations</b> require two inverse operations</li>
            <li>Undo addition or subtraction first, then undo multiplication or division</li>
            <b>Example:</b>
            <ul>Solve: 3x + 4 = 22</ul>
            <ul>Step 1: Subtract 4 → 3x = 18</ul>
            <ul>Step 2: Divide by 3 → x = 6</ul>
      </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit5Lesson3Quiz")}
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

export default PAUnit5Lesson3Page;