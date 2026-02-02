import "./SUnit4LessonsPage.css";

function SUnit4LessonsPage({ setCurrentPage }) {
  return (
    <div className="unit-container">
      <h1 className="units-title">Unit 4: Data Distributions</h1>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit4Lesson1Page")}>
        Lesson 1 — Histograms
      </div>

      <div className="unit-box" onClick={() => setCurrentPage("SUnit4Lesson2Page")}>
        Lesson 2 — Box Plots 
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit4Lesson3Page")}>
        Lesson 3 — Stem-and-Leaf Plots
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit4Lesson4Page")}>
        Lesson 4 — Comparing Distributions
      </div>

      <div className="unit-box" onClick={()=> setCurrentPage("SUnit4Test")}>
        Unit Test
      </div>

      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>

      <button
        className="units-btn"
        onClick={() => setCurrentPage("StatisticsUnitsPage")}
      >
        Back to Units
      </button>
    </div>
  );
}

export default SUnit4LessonsPage;