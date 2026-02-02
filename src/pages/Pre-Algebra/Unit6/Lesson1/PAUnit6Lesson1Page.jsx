import "./PAUnit6Lesson1Page.css";

function PAUnit6Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 - Angles & Lines</h1>

      

      <div className="lesson-box">
        <ul>
            <h3>1. Types of Angles</h3>
            <li><b>Acute angle:</b> less than 90 degrees</li>
            <li><b>Right angle:</b> exactly 90 degrees</li>
            <li><b>Obtuse angle:</b> more than 90 degrees but less than 180</li>
            <li><b>Straight angle:</b> exactly 180 degrees</li>

            <h3>2. Types of Lines</h3>
            <li><b>Parallel lines:</b> never meet/intersect</li>
            <li><b>Perpendicular lines:</b> form a right angle</li>
            <li><b>Intersecting lines:</b> cross at any angle</li>

            <h3>3. Simple Angle Relatioonships</h3>
            <li><b>Vertical angles:</b> opposite angles; they are equal</li>
            <li><b>Adjacent angles:</b> next to each other; share a side</li>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit6Lesson1Quiz")}
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

export default PAUnit6Lesson1Page;