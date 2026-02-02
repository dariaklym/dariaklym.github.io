import "./AlgebraUnitsPage.css";

function AlgebraUnitsPage({ setCurrentPage }) {
  return (
    <div className="units-container">

      <div className="glass-box units-title-box">
        <h1>Algebra Units</h1>
      </div>
      <div className="units-grid">
        <div className="glass-box unit-card" onClick={() => setCurrentPage("AUnit1LessonsPage")}>Unit 1 – Expressions & Simplifying</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("AUnit2LessonsPage")}>Unit 2 – Solving Equations</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("AUnit3LessonsPage")}>Unit 3 – Inequalities</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("AUnit4LessonsPage")}>Unit 4 – Functions & Relations</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("AUnit5LessonsPage")}>Unit 5 – Systems of Equations</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("AUnit6LessonsPage")}>Unit 6 – Polynomials & Quadratics</div>
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

export default AlgebraUnitsPage;