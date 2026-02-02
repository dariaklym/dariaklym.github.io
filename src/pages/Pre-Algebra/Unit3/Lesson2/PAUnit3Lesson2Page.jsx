import "./PAUnit3Lesson2Page.css";

function PAUnit3Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Rates & Unit Rate</h1>

      <div className="lesson-box">
        <ul>A <b>rate</b> compares two different units.
        <ul>Examples:</ul>
        <ul><li>60 miles per hour</li><li>20 dollars for 5 tickets</li><li>150 words per minute</li></ul>
        <h3>Unit Rate</h3>
        A <b>unit rate</b> means "per 1"
        <ul>Example: </ul>
        <ul>20 dollars for 5 tickets --{`>`} 20 / 5 = <b>4 dollars per ticket</b></ul>
        <ul>Another example:
          <ul>150 miles in 3 hours --{`>`} 150 / 3 = <b>50 miles per hour</b></ul>
        </ul>
        <h3>Why Unit Rate Helps</h3>
        <ul>~ it lets you compare things fairly.</ul>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit3Lesson2Quiz")}
      >
        Take Quiz
      </button><button 
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

export default PAUnit3Lesson2Page;