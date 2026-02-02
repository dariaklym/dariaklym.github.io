import "./GeometryUnitsPage.css";

function GeometryUnitsPage({ setCurrentPage }) {
  return (
    <div className="units-container">

      <div className="glass-box units-title-box">
        <h1>Geometry Units</h1>
      </div>
      <div className="units-grid">
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GUnit1LessonsPage")}>Unit 1 – Basics of Geometry</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GUnit2LessonsPage")}>Unit 2 – Triangles</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GUnit3LessonsPage")}>Unit 3 – Quadrilaterals & Polygons</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GUnit4LessonsPage")}>Unit 4 – Circles</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GUnit5LessonsPage")}>Unit 5 – Coordinate Geometry</div>
        <div className="glass-box unit-card" onClick={() => setCurrentPage("GUnit6LessonsPage")}>Unit 6 – Volume, Surface Area & Transformations</div>      
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

export default GeometryUnitsPage;