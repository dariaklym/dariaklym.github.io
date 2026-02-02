import "./PAUnit5Lesson2Page.css";

function PAUnit5Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 - Writing and Solving 1-Step Equations</h1>

      

      <div className="lesson-box">
        <ul>
            <li>A <b>1-step equation</b> can be solved by undoing the operation</li>
            <li>Use the inverse operation:</li>
            <ul><li>Addition  ↔ Subtraction</li>
            <li>Multiplication ↔ Division</li></ul>
            <b>Examples:</b>
            <ul>1) x + 7 = 20 → subtract 7 →  x = 13</ul>
            <ul>2) 4x = 28 → divide by 4 →  x = 7</ul>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit5Lesson2Quiz")}
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

export default PAUnit5Lesson2Page;