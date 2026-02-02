import "./PAUnit6Lesson3Page.css";

function PAUnit6Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 - Volume Basics</h1>

      

      <div className="lesson-box">
        <ul>
            <h3>1. What Is Volume?</h3>
            <ul>Volume is the amount of space inside a 3D object.<br />
            Measured in cubic units (units^3)</ul>
            <h3>2. Formulas</h3>
            <p><b>Cube</b></p>
            <ul>All sides equal.<br />
            Volume = side * side * side (or side^3)</ul>
            <p><b>Rectangular Prism</b></p>
            <ul>Volume = length * width * height</ul>
            <h3>3. Example</h3>
            <ul>A cube has side length 3 units.<br />
            Volume = 3 * 3 * 3 = 27 units^3</ul>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit6Lesson3Quiz")}
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
        onClick={() => setCurrentPage("PAUnit6LessonsPage")}
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

export default PAUnit6Lesson3Page;