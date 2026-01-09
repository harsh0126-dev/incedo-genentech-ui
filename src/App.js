import "./App.css";

function App() {
  return (
    <div className="app-container">

      {/* ================= HEADER ================= */}
      <header className="header">
        <img src="/incedo-logo.png" alt="Incedo" className="logo" />
        <img src="/genentech-logo.png" alt="Genentech" className="logo" />
      </header>

      {/* ================= HERO / LANDING ================= */}
      <main className="hero">
        <h1 className="title">Data Quality & Intelligence Platform</h1>
        <p className="subtitle">
          Accelerating trusted insights with enterprise-grade analytics
        </p>

        {/* ALL BUTTONS PARALLEL */}
        <div className="button-row">
          <button className="primary-btn">Intellipath</button>
          <button className="secondary-btn">DQ Expert</button>
          <button className="secondary-btn">Analytics Hub</button>
          <button className="primary-btn">Quality Monitor</button>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2026 Incedo × Genentech. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
