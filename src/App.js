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
        <h1 className="title">Incedo's Data Modernization Platform</h1>
        <p className="subtitle">
          Powered by GenAI Enabled Migration Toolkit
        </p>

        {/* ALL BUTTONS PARALLEL */}
        <div className="button-row">
          <button className="primary-btn">IntelliQA</button>
          <button className="secondary-btn">DataXel</button>
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
