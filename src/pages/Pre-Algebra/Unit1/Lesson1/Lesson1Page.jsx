import "./Lesson1Page.css";

function Lesson1Page({ setCurrentPage }) {
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Lesson 1 — Positive & Negative Numbers</h1>

      <div className="lesson-box">
        <h3>
          1. Integers</h3>
          <ul>
            <li>Integers are all whole numbers and their negatives:</li>
            </ul>
            <p>Examples: ..., -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, ...</p>
        
          <h3>2. Number Line</h3>
            <ul><li>Left = smaller</li>
            <li>Right = larger</li></ul>

          <h3>3. Opposites</h3>
            <ul>
              <li>Opposites are numbers the same distance from 0 but on different sides.</li></ul>
            <p>Example: opposite of 5 is -5.</p>

          <h3>4. Absolute Value</h3>
            <ul>
              <li>Absolute value means distance from 0.</li>
              <li>Always positive.</li>
              </ul>
            

          <h3>5. Comparing Integers</h3>
          <ul>
            <li>Positive numbers {`>`}  0</li>
            <li>Negative numbers {`<`} 0</li>
            <li>If two negatives: the one closer to 0 is greater.</li>
          </ul>
          <p>Example: -2 {`>`} -7</p>

        <ul>
          <li>|-7| = 7</li>
          <li>|4| = 4</li>
        </ul>
      </div>

      {/* Take Quiz Button */}
      <button 
        className="quiz-button"
        onClick={() => setCurrentPage("Lesson1Quiz")}
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
        onClick={() => setCurrentPage("PAUnit1LessonsPage")}
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

export default Lesson1Page;
