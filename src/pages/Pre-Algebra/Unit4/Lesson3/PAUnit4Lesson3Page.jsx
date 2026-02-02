import "./PAUnit4Lesson3Page.css";

function PAUnit4Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 - One-Step Equations</h1>

      

      <div className="lesson-box">
      <ul><h5>What an Equation Is</h5>
      An equation <b>has an equals sign.</b>
      <ul>Example:
        <ul>3x = 12</ul>
      </ul>
      <h5>Solving by Doing the Opposite Operation</h5>
      <b>If the equation has addition:</b>
      <ul>x + 7 = 12<br />
       → subtract 7<br />
      x = 5</ul>

      <b>If the equation has subtraction:</b>
      <ul>x - 4 = 9<br />
       → add 4<br />
      x = 13</ul>
     
      <b>If the equation has multiplication:</b>
      <ul>5x = 20<br />
       → divide by 5<br />
      x = 4</ul>

      <b>If the equation has division:</b>
      <ul>x / 3 = 9<br />
       → multiply by 3 7<br />
      x = 27</ul>
 </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit4Lesson3Quiz")}
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
        onClick={() => setCurrentPage("PAUnit4LessonsPage")}
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

export default PAUnit4Lesson3Page;