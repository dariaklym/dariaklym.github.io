import "./PreAlgebraUnitsPage.css";

function PreAlgebraUnitsPage({ setCurrentPage }) {
  return (
    <div className="units-container">

      <div className="glass-box units-title-box">
        <h1>Pre-Algebra Units</h1>
      </div>
      <div className="units-grid">
        <div className="glass-box unit-card" onClick={() => setCurrentPage("Unit1LessonsPage")}>Unit 1 – Working With Numbers</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("PAUnit2LessonsPage")}>Unit 2 – Fractions & Decimals</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("PAUnit3LessonsPage")}>Unit 3 – Ratios, Rates, & Percents</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("PAUnit4LessonsPage")}>Unit 4 – Expressions & Equations (basics)</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("PAUnit5LessonsPage")}>Unit 5 – Expressions, Equations, and Inequalities</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("PAUnit6LessonsPage")}>Unit 6 – Geometry & Statistics Basics</div>
      </div>
      <button 
        className="Home-btn"
        onClick={() => setCurrentPage("HomePage")}
      >
        Home
      </button>
    
    </div>
  );
}

export default PreAlgebraUnitsPage;