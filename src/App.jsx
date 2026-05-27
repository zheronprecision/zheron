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
        <a href="#home" className="brand" aria-label="Zheron Precision Home">
          <div className="logo">ZHERON</div>
          <div className="logoSub">Precision</div>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#process">Process</a>
          <a href="#materials">Materials</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="outlineBtn" href="#contact">Request a Quote</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroCopy">
            <div className="eyebrow">
              Defense & Aerospace-Grade Precision Component Manufacturing
            </div>

            <h1>Precision for Perfection.</h1>

            <p className="tagline">Measured. Controlled. Repeatable.</p>

            <div className="heroText">
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

            <div className="buttonGroup">
              <a className="solidBtn" href="#contact">Request a Quote</a>
              <a className="outlineBtn" href="#capabilities">Explore Capabilities</a>
            </div>
          </div>

          <div className="heroVisual" aria-label="Precision manufacturing visual area">
            <span className="visualTag tagOne">Surface Quality</span>
            <span className="visualTag tagTwo">CMM Inspection</span>
            <span className="visualTag tagThree">Micrometer</span>
            <span className="visualTag tagFour">Dimensional Control</span>
            <div className="measurementRing"></div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <div className="eyebrow">What We Do</div>
            <h2>Precision Manufacturing for Critical Applications</h2>
          </div>

          <div className="gridThree">
            <article className="card">
              <h3>High-Tolerance Machining</h3>
              <p>Complex precision components with controlled dimensional consistency.</p>
            </article>

            <article className="card">
              <h3>Process Discipline</h3>
              <p>Stable machining strategy, inspection workflow and repeatable production logic.</p>
            </article>

            <article className="card">
              <h3>Delivery Reliability</h3>
              <p>Structured production planning and accountable lead-time management.</p>
            </article>
          </div>
        </section>

        <section className="section muted">
          <div className="twoColumn">
            <div>
              <div className="eyebrow">Why Zheron</div>
              <h2>Why disciplined manufacturing matters.</h2>
            </div>

            <div className="largeText">
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
          <div className="sectionHeader">
            <div className="eyebrow">Process</div>
            <h2>Manufacturing Workflow</h2>
          </div>

          <div className="gridProcess">
            {process.map((item, index) => (
              <article className="card processCard" key={item.title}>
                <div className="step">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="section muted">
          <div className="sectionHeader">
            <div className="eyebrow">Capabilities</div>
            <h2>Manufacturing Capabilities</h2>
          </div>

          <div className="gridThree">
            {capabilities.map((item) => (
              <article className="listCard" key={item}>{item}</article>
            ))}
          </div>
        </section>

        <section id="materials" className="section">
          <div className="sectionHeader">
            <div className="eyebrow">Materials</div>
            <h2>Material Range</h2>
          </div>

          <div className="gridThree">
            {materials.map((item) => (
              <article className="listCard" key={item}>{item}</article>
            ))}
          </div>
        </section>

        <section id="contact" className="section muted">
          <div className="twoColumn">
            <div>
              <div className="eyebrow">Contact</div>
              <h2>Request a Technical Review</h2>
              <p className="contactIntro">
                Share your technical drawings or production requirements for evaluation.
              </p>
            </div>

            <form className="contactBox">
              <input placeholder="Name" />
              <input placeholder="Company" />
              <input placeholder="Email" />
              <input placeholder="Phone" />
              <textarea rows="6" placeholder="Message"></textarea>
              <button className="solidBtn" type="button">Submit Request</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footerLogo">ZHERON PRECISION</div>
          <div className="footerText">
            Defense & Aerospace-Grade Manufacturing Discipline
          </div>
        </div>

        <div className="footerText">© 2026 Zheron Precision. All rights reserved.</div>
      </footer>
    </div>
  );
}
