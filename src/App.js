import "./App.css";

const DATAXEL_URL = "https://dataxel.incedolabs.com/";

function App() {
  const handleDataXelClick = () => {
    window.open(DATAXEL_URL, "_blank", "noopener,noreferrer");
  };

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
          <button className="primary-btn" onClick={handleDataXelClick}>
            IntelliQA
          </button>
          <button className="secondary-btn" onClick={handleDataXelClick}>
            DataXel
          </button>
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
