import "./PAUnit6Lesson4Page.css";

function PAUnit6Lesson4Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 4 - Basic Statistics</h1>

      

      <div className="lesson-box">
        <ul>
            <h3>1. Mean (average)</h3>
            <ul>Add all numbers, divide by 'how many'</ul>
            <ul>Example:
                <ul>Numbers: 4, 8, 8 , 10<br />
                Mean = (4 + 8 + 8 + 10) / 4 = 30 / 4 == 7.5</ul>
                </ul>
            <h3>2. Median</h3>
            <ul>The middle number when the list is in order.
            </ul>
            <ul>Example: 
                <ul>2, 5, 7 → median = 5<br />
                For an even number of values, average the two middle ones.</ul>
            </ul>
           <h3>3. Mode</h3>
           <ul>The number that appears most often.
            <ul>Example: 3, 3, 6, 7 → mode = 3</ul>
           </ul>
           <h3>4. Range</h3>
           <ul>Largest minus smallest
            <ul>Example: 10, 4, 8 → rangee = 10 - 4 = 6</ul>
           </ul>
         </ul>

      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("PAUnit6Lesson4Quiz")}
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

export default PAUnit6Lesson4Page;