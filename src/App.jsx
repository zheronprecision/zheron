import "./style.css";

export default function App() {
  const capabilities = [
    "CNC Milling",
    "CNC Turning",
    "Prototype Manufacturing",
    "Low-Volume Precision Production",
    "Fixture-Oriented Machining",
    "Surface-Sensitive Components",
  ];

  const materials = [
    "Aluminum Alloys",
    "Stainless Steel",
    "Titanium",
    "Engineering Plastics",
    "Tool Steels",
    "Brass & Copper Alloys",
  ];

  const process = [
    {
      title: "Technical Review",
      text: "Drawing evaluation, tolerance analysis and manufacturability review.",
    },
    {
      title: "Process Planning",
      text: "Toolpath strategy, fixture logic and machining sequence definition.",
    },
    {
      title: "Controlled Machining",
      text: "Stable and repeatable production with dimensional monitoring.",
    },
    {
      title: "Inspection & Verification",
      text: "Measurement-based quality control and documentation discipline.",
    },
    {
      title: "Delivery Coordination",
      text: "Protected packaging and structured shipment planning.",
    },
  ];

  return (
    <div className="site">
      <header className="navbar">
        <div>
          <div className="logo">ZHERON</div>
          <div className="logo-sub">Precision</div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#process">Process</a>
          <a href="#materials">Materials</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="outline-btn">Request a Quote</button>
      </header>

      <section id="home" className="hero">
        <div className="hero-left">
          <div className="small-title">
            Defense & Aerospace-Grade Precision Component Manufacturing
          </div>

          <h1>Precision for Perfection.</h1>

          <p className="hero-tagline">
            Measured. Controlled. Repeatable.
          </p>

          <div className="hero-text">
            <p>
              Zheron Precision manufactures high-tolerance machined components
              for defense, aerospace and industrial applications requiring
              process discipline, dimensional consistency and delivery
              reliability.
            </p>

            <p>
              We focus on controlled manufacturing rather than volume claims —
              with attention to surface quality, material traceability,
              machining stability and measurement integrity.
            </p>
          </div>

          <div className="hero-buttons">
            <button className="solid-btn">Request a Quote</button>
            <button className="outline-btn">Explore Capabilities</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-tag">Surface Quality</div>
          <div className="floating-tag second">CMM Inspection</div>
          <div className="floating-tag third">Micrometer</div>
          <div className="floating-tag fourth">Dimensional Control</div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div className="section-small">What We Do</div>
          <h2>Precision Manufacturing for Critical Applications</h2>
        </div>

        <div className="grid-three">
          <div className="card">
            <h3>High-Tolerance Machining</h3>
            <p>
              Complex precision components with controlled dimensional
              consistency.
            </p>
          </div>

          <div className="card">
            <h3>Process Discipline</h3>
            <p>
              Stable machining strategy, inspection workflow and repeatable
              production logic.
            </p>
          </div>

          <div className="card">
            <h3>Delivery Reliability</h3>
            <p>
              Structured production planning and accountable lead-time
              management.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="two-column">
          <div>
            <div className="section-small">Why Zheron</div>
            <h2>Why disciplined manufacturing matters.</h2>
          </div>

          <div className="why-text">
            <p>
              In precision manufacturing, capability alone is not enough.
              Consistency, inspection culture and process stability determine
              whether a supplier can be trusted repeatedly.
            </p>

            <p>
              Zheron Precision focuses on controlled execution — from machining
              strategy to final measurement and delivery coordination.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="section-header">
          <div className="section-small">Process</div>
          <h2>Manufacturing Workflow</h2>
        </div>

        <div className="grid-process">
          {process.map((item, index) => (
            <div className="card" key={item.title}>
              <div className="step">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section dark-section">
        <div className="section-header">
          <div className="section-small">Capabilities</div>
          <h2>Manufacturing Capabilities</h2>
        </div>

        <div className="grid-three">
          {capabilities.map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="materials" className="section">
        <div className="section-header">
          <div className="section-small">Materials</div>
          <h2>Material Range</h2>
        </div>

        <div className="grid-three">
          {materials.map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section dark-section">
        <div className="two-column">
          <div>
            <div className="section-small">Contact</div>
            <h2>Request a Technical Review</h2>

            <p className="contact-text">
              Share your technical drawings or production requirements for
              evaluation.
            </p>
          </div>

          <div className="contact-box">
            <input placeholder="Name" />
            <input placeholder="Company" />
            <input placeholder="Email" />
            <textarea rows="6" placeholder="Message"></textarea>

            <button className="solid-btn">Submit Request</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">ZHERON PRECISION</div>
          <div className="footer-text">
            Defense & Aerospace-Grade Manufacturing Discipline
          </div>
        </div>

        <div className="footer-text">
          © 2026 Zheron Precision. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
