import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Factory,
  Gauge,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import "./style.css";

const services = [
  {
    icon: <Cpu size={26} />,
    title: "CNC Precision Machining",
    text: "Aluminum, steel, stainless steel and engineering materials for high-tolerance components.",
  },
  {
    icon: <Gauge size={26} />,
    title: "Tight Tolerance Production",
    text: "Process discipline, repeatability and measurement-focused manufacturing for critical parts.",
  },
  {
    icon: <Factory size={26} />,
    title: "OEM & Subcontract Supply",
    text: "Reliable component supply for defense, aerospace, industrial and technology manufacturers.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Defense-Grade Mindset",
    text: "Confidentiality, traceability and documentation culture built into every production step.",
  },
];

const capabilities = [
  "CNC milling and turning",
  "Prototype and low-volume production",
  "Serial part manufacturing",
  "Technical drawing-based production",
  "Surface preparation coordination",
  "Dimensional inspection support",
  "Supplier documentation",
  "Confidential project handling",
];

const industries = [
  "Defense",
  "Aerospace",
  "Robotics",
  "Industrial Machinery",
  "Energy",
  "Medical Technology",
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="glow" />

        <nav className="nav">
          <div className="brand">
            <div className="mark">8</div>
            <div>
              <div className="brand-title">ZHERON</div>
              <div className="brand-subtitle">Precision</div>
            </div>
          </div>

          <div className="nav-links">
            <a href="#capabilities">Capabilities</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">
              Defense & Aerospace-Grade Precision Component Manufacturing
            </p>
            <h1>Precision parts for manufacturers who cannot afford uncertainty.</h1>
            <p className="lead">
              Zheron Precision manufactures high-accuracy mechanical components
              for demanding OEMs, subcontractors and technology-driven
              industrial companies.
            </p>

            <div className="actions">
              <a className="primary" href="#contact">
                Request supplier contact <ArrowRight size={20} />
              </a>
              <a className="secondary" href="#capabilities">
                View capabilities
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="focus-card"
          >
            <div className="focus-top">
              <span>Operational Focus</span>
              <b>Supplier Ready</b>
            </div>

            {[
              "Tolerances before volume",
              "Documentation before promises",
              "Repeatability before speed",
              "Confidentiality before exposure",
            ].map((item) => (
              <div className="focus-row" key={item}>
                <CheckCircle2 size={21} />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Built for serious subcontract manufacturing.</h2>
          <p>
            Zheron is positioned for manufacturers that need a disciplined,
            responsive and technically literate production partner.
          </p>
        </div>

        <div className="cards">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="band-grid">
          <div>
            <p className="eyebrow">Production Scope</p>
            <h2>From technical drawing to controlled delivery.</h2>
          </div>

          <div className="capability-list">
            {capabilities.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="section">
        <div className="section-head">
          <p className="eyebrow">Industries</p>
          <h2>Focused on sectors where reliability is not decorative.</h2>
        </div>

        <div className="industry-grid">
          {industries.map((industry) => (
            <div key={industry}>{industry}</div>
          ))}
        </div>
      </section>

      <section className="section statement-section">
        <div className="statement">
          <p className="eyebrow">Positioning</p>
          <h2>
            Not a general workshop. A precision supplier candidate for demanding
            procurement teams.
          </h2>
          <p>
            Zheron Precision is being structured around process discipline,
            technical communication and long-term supplier relationships — not
            one-off casual machining jobs.
          </p>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <div className="footer-brand">ZHERON</div>
          <p>Defense & aerospace-grade precision component manufacturing.</p>
        </div>

        <div className="contact-grid">
          <div>
            <Mail size={21} />
            <span>Email</span>
            <b>info@zheronprecision.com</b>
          </div>
          <div>
            <Phone size={21} />
            <span>Phone</span>
            <b>+90 XXX XXX XX XX</b>
          </div>
          <div>
            <MapPin size={21} />
            <span>Location</span>
            <b>Ankara, Türkiye</b>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
