import "./GUnit6Lesson3Page.css";

function GUnit6Lesson3Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 3 — Transformations (Text-based)</h1>

      <div className="lesson-box">
        <p><b>Translation:</b> Move points by adding/subtracting coordinates</p>
        <ul>
          <li><b>Example:</b> Point (2,3) translated by (+4, -1) → (2 + 4, 3 - 1) = <b>(6, 2)</b></li>
        </ul>
        <p><b>Reflection:</b> Flip over x-axis or y-axis</p>
        <ul>
          <li>Over x-axis: (x,y) → (x,-y)</li>
          <li>Over y-axis: (x,y) → (-x,y)</li>
          <li>Example: (3,5) over x-axis → (3,-5)</li>
        </ul>
        <p><b>Rotation:</b> Rotate 90 degrees, 180 degrees, 270 degrees around origin (text-based numeric rules)</p>
        <ul>
          <li>90 degrees: <b>(x,y) → (-y,x)</b></li>
          <li>180 degrees: <b>(x,y) → (-x,-y)</b></li>
          <li>270 degrees: <b>(x,y) → (y,-x)</b></li>
          <li><b>Example: </b>(2,3) rotated 90 degrees → (-3,2)</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit6Lesson3Quiz")}
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
        onClick={() => setCurrentPage("GUnit6LessonsPage")}
      >
        Back to Lessons
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("GeometryUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default GUnit6Lesson3Page;