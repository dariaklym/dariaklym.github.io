import "./GUnit6Lesson2Page.css";

function GUnit6Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 — Volume of Solids</h1>

      <div className="lesson-box">
        <p><b>Cube:</b> Volume = side³</p>
        <ul>
          <p><b>Example:</b> Side = 3 → V = 3³ = <b>27</b></p>
          </ul>  
        <p><b>Rectangular Prism:</b> Volume = l * w * h</p>
        <ul>
          <p><b>Example:</b> l = 4, w = 3, h = 2 → V = 4 * 3 * 2 = <b>24</b></p>
          </ul>  
        <p><b>Cylinder:</b> Volume = πr²h</p>
        <ul>
          <p><b>Example:</b> r = 3, h = 5 → V = π * 9 * 5 = <b>45π</b></p>
          </ul>  
      
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit6Lesson2Quiz")}
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

export default GUnit6Lesson2Page;