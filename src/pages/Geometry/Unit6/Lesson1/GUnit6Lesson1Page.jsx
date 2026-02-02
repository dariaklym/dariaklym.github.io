import "./GUnit6Lesson1Page.css";

function GUnit6Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Surface Area of Solids</h1>

      <div className="lesson-box">
        <p><b>Cube:</b> Surface area = 6 * (side²)</p>
        <ul>
          <p><b>Example:</b> Side = 3 → Surface area = 6 * (3²) = 6 * 9 = <b>54</b></p>
          </ul>  
        <p><b>Rectangular Prism:</b> Surface area = 2(lw + lh + wh)</p>
        <ul>
          <p><b>Example:</b> l = 4, w = 3, h = 2 → SA = 2(4 * 3 + 4 * 2 + 3 * 2) = 2(12 + 8 + 6) = 2 * 26 = <b>52</b></p>
          </ul>  
        <p><b>Cylinder:</b> Surface area = 2πr² + 2πrh</p>
        <ul>
          <p><b>Example:</b> r = 3, h = 5 → SA = 2π(9) + 2π(3 * 5) = 18π + 30π = <b>48π</b></p>
          </ul>  
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("GUnit6Lesson1Quiz")}
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

export default GUnit6Lesson1Page;