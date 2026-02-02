import "./PAUnit6Lesson2Page.css";

function PAUnit6Lesson2Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 2 - Perimeter & Area</h1>

      

      <div className="lesson-box">
        <ul>
            <h3>1. Perimeter</h3>
            <ul>Add all side lengths.
                <ul>Example:
                    <ul>A rectangle is 4 units by 7 units.<br />
                    Perimeter = 4 + 4 + 7 + 7 = <b>22 units</b></ul>
                </ul>
            </ul>

            <h3>2. Area Fromulas</h3>
            <ul><li><b>Rectangle:</b> Area = length * width</li>
            <li><b>Triangle: </b> Area = (base * height) / 2</li>
            <li><b>Parallelogram:</b> Area = base * height</li></ul>

            <h3>3. Real-World Example</h3>
            <ul>a graden is 6 ft by 10 ft<br />
            Area = 6 * 10 = <b>60 square units</b></ul>
        </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit6Lesson2Quiz")}
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

export default PAUnit6Lesson2Page;