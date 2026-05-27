import { useState } from "react";

const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      capabilities: "Kabiliyetler",
      process: "Proses",
      materials: "Malzemeler",
      contact: "İletişim",
      cta: "Teklif Talep Et",
    },
    hero: {
      eyebrow: "Savunma ve Havacılık Seviyesinde Hassas Parça Üretimi",
      title: "Precision for Perfection.",
      tagline: "Ölçülebilir. Kontrollü. Tekrarlanabilir.",
      paragraphs: [
        "Zheron Precision; savunma, havacılık ve yüksek hassasiyet gerektiren endüstriyel uygulamalar için tolerans kontrollü işlenmiş parçalar üretir.",
        "Üretimde hacim iddialarından çok; yüzey kalitesi, ölçüsel tutarlılık, proses disiplini ve teslim güvenilirliğine odaklanırız.",
      ],
      primary: "Teklif Talep Et",
      secondary: "Kabiliyetleri İncele",
    },
    visual: {
      one: "Yüzey Kalitesi",
      two: "CMM Ölçüm",
      three: "Mikrometre",
      four: "Ölçüsel Kontrol",
    },
    what: {
      eyebrow: "Ne Yapıyoruz",
      title: "Kritik Uygulamalar İçin Hassas Üretim",
      cards: [
        {
          title: "Yüksek Toleranslı İşleme",
          text: "Kontrollü ölçüsel tutarlılığa sahip kompleks hassas parçaların üretimi.",
        },
        {
          title: "Proses Disiplini",
          text: "Kararlı işleme stratejisi, ölçüm akışı ve tekrarlanabilir üretim yaklaşımı.",
        },
        {
          title: "Teslim Güvenilirliği",
          text: "Planlı üretim yönetimi ve sorumluluğu net teslim süreçleri.",
        },
      ],
    },
    why: {
      eyebrow: "Neden Zheron",
      title: "Disiplinli üretim neden önemlidir?",
      paragraphs: [
        "Hassas üretimde yalnızca üretim kabiliyeti yeterli değildir. Tutarlılık, ölçüm kültürü ve proses kararlılığı; bir tedarikçinin sürdürülebilir şekilde güvenilir olup olmadığını belirler.",
        "Zheron Precision; işleme stratejisinden final ölçüm ve sevkiyat koordinasyonuna kadar kontrollü üretim yaklaşımına odaklanır.",
      ],
    },
    process: {
      eyebrow: "Proses",
      title: "Üretim Akışı",
      items: [
        {
          title: "Teknik İnceleme",
          text: "Teknik resim değerlendirmesi, tolerans analizi ve üretilebilirlik incelemesi.",
        },
        {
          title: "Proses Planlama",
          text: "Takım yolu stratejisi, fikstür yaklaşımı ve işleme sırası planlaması.",
        },
        {
          title: "Kontrollü İşleme",
          text: "Ölçüsel takip ile kararlı ve tekrarlanabilir üretim.",
        },
        {
          title: "Ölçüm ve Doğrulama",
          text: "Ölçüm temelli kalite kontrol ve dokümantasyon disiplini.",
        },
        {
          title: "Teslimat Koordinasyonu",
          text: "Koruyucu paketleme ve planlı sevkiyat yönetimi.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Kabiliyetler",
      title: "Üretim Kabiliyetleri",
      items: [
        "CNC Freze",
        "CNC Torna",
        "Prototip Üretim",
        "Düşük Adet Hassas Üretim",
        "Fikstür Odaklı İşleme",
        "Yüzey Hassasiyeti Gerektiren Parçalar",
      ],
    },
    materials: {
      eyebrow: "Malzemeler",
      title: "Malzeme Aralığı",
      items: [
        "Alüminyum Alaşımları",
        "Paslanmaz Çelikler",
        "Titanyum",
        "Mühendislik Plastikleri",
        "Takım Çelikleri",
        "Pirinç ve Bakır Alaşımları",
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Teknik Değerlendirme Talebi",
      text: "Teknik resimlerinizi veya üretim ihtiyaçlarınızı değerlendirme için bizimle paylaşın.",
      name: "Ad Soyad",
      company: "Firma",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesaj",
      submit: "Talep Gönder",
    },
    footer: {
      line: "Savunma ve Havacılık Seviyesinde Üretim Disiplini",
      rights: "© 2026 Zheron Precision. Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      home: "Home",
      capabilities: "Capabilities",
      process: "Process",
      materials: "Materials",
      contact: "Contact",
      cta: "Request a Quote",
    },
    hero: {
      eyebrow: "Defense & Aerospace-Grade Precision Component Manufacturing",
      title: "Precision for Perfection.",
      tagline: "Measured. Controlled. Repeatable.",
      paragraphs: [
        "Zheron Precision manufactures high-tolerance machined components for defense, aerospace and industrial applications requiring process discipline, dimensional consistency and delivery reliability.",
        "We focus on controlled manufacturing rather than volume claims — with attention to surface quality, material traceability, machining stability and measurement integrity.",
      ],
      primary: "Request a Quote",
      secondary: "Explore Capabilities",
    },
    visual: {
      one: "Surface Quality",
      two: "CMM Inspection",
      three: "Micrometer",
      four: "Dimensional Control",
    },
    what: {
      eyebrow: "What We Do",
      title: "Precision Manufacturing for Critical Applications",
      cards: [
        {
          title: "High-Tolerance Machining",
          text: "Complex precision components with controlled dimensional consistency.",
        },
        {
          title: "Process Discipline",
          text: "Stable machining strategy, inspection workflow and repeatable production logic.",
        },
        {
          title: "Delivery Reliability",
          text: "Structured production planning and accountable lead-time management.",
        },
      ],
    },
    why: {
      eyebrow: "Why Zheron",
      title: "Why disciplined manufacturing matters.",
      paragraphs: [
        "In precision manufacturing, capability alone is not enough. Consistency, inspection culture and process stability determine whether a supplier can be trusted repeatedly.",
        "Zheron Precision focuses on controlled execution — from machining strategy to final measurement and delivery coordination.",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Manufacturing Workflow",
      items: [
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
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Manufacturing Capabilities",
      items: [
        "CNC Milling",
        "CNC Turning",
        "Prototype Manufacturing",
        "Low-Volume Precision Production",
        "Fixture-Oriented Machining",
        "Surface-Sensitive Components",
      ],
    },
    materials: {
      eyebrow: "Materials",
      title: "Material Range",
      items: [
        "Aluminum Alloys",
        "Stainless Steel",
        "Titanium",
        "Engineering Plastics",
        "Tool Steels",
        "Brass & Copper Alloys",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Request a Technical Review",
      text: "Share your technical drawings or production requirements for evaluation.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Submit Request",
    },
    footer: {
      line: "Defense & Aerospace-Grade Manufacturing Discipline",
      rights: "© 2026 Zheron Precision. All rights reserved.",
    },
  },
};

export default function App() {
  const [lang, setLang] = useState("tr");
  const t = content[lang];

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Zheron Precision Home">
          <div className="logo">ZHERON</div>
          <div className="logoSub">Precision</div>
        </a>

        <nav>
          <a href="#home">{t.nav.home}</a>
          <a href="#capabilities">{t.nav.capabilities}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#materials">{t.nav.materials}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="navActions">
          <button className="langSwitch" onClick={() => setLang(lang === "tr" ? "en" : "tr")}>
            {lang === "tr" ? "EN" : "TR"}
          </button>
          <a className="outlineBtn" href="#contact">{t.nav.cta}</a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroCopy">
            <div className="eyebrow">{t.hero.eyebrow}</div>

            <h1>{t.hero.title}</h1>

            <p className="tagline">{t.hero.tagline}</p>

            <div className="heroText">
              {t.hero.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="buttonGroup">
              <a className="solidBtn" href="#contact">{t.hero.primary}</a>
              <a className="outlineBtn" href="#capabilities">{t.hero.secondary}</a>
            </div>
          </div>

          <div className="heroVisual" aria-label="Precision manufacturing visual area">
            <img
              src="/images/hero-precision.jpg"
              alt="Precision measurement and machined surface"
              className="heroImage"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="visualTag tagOne">{t.visual.one}</span>
            <span className="visualTag tagTwo">{t.visual.two}</span>
            <span className="visualTag tagThree">{t.visual.three}</span>
            <span className="visualTag tagFour">{t.visual.four}</span>
            <div className="measurementRing"></div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <div className="eyebrow">{t.what.eyebrow}</div>
            <h2>{t.what.title}</h2>
          </div>

          <div className="gridThree">
            {t.what.cards.map((card) => (
              <article className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="imageBand">
          <div className="imageTile">
            <img src="/images/cmm-measurement.jpg" alt="CMM measurement" onError={(e) => (e.currentTarget.style.display = "none")} />
            <span>{lang === "tr" ? "Ölçüm disiplini" : "Measurement discipline"}</span>
          </div>
          <div className="imageTile">
            <img src="/images/surface-quality.jpg" alt="Machined surface quality" onError={(e) => (e.currentTarget.style.display = "none")} />
            <span>{lang === "tr" ? "Yüzey kalitesi" : "Surface quality"}</span>
          </div>
          <div className="imageTile">
            <img src="/images/micrometer.jpg" alt="Micrometer inspection" onError={(e) => (e.currentTarget.style.display = "none")} />
            <span>{lang === "tr" ? "Mikrometre kontrolü" : "Micrometer control"}</span>
          </div>
        </section>

        <section className="section muted">
          <div className="twoColumn">
            <div>
              <div className="eyebrow">{t.why.eyebrow}</div>
              <h2>{t.why.title}</h2>
            </div>

            <div className="largeText">
              {t.why.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="sectionHeader">
            <div className="eyebrow">{t.process.eyebrow}</div>
            <h2>{t.process.title}</h2>
          </div>

          <div className="gridProcess">
            {t.process.items.map((item, index) => (
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
            <div className="eyebrow">{t.capabilities.eyebrow}</div>
            <h2>{t.capabilities.title}</h2>
          </div>

          <div className="gridThree">
            {t.capabilities.items.map((item) => (
              <article className="listCard" key={item}>{item}</article>
            ))}
          </div>
        </section>

        <section id="materials" className="section">
          <div className="sectionHeader">
            <div className="eyebrow">{t.materials.eyebrow}</div>
            <h2>{t.materials.title}</h2>
          </div>

          <div className="gridThree">
            {t.materials.items.map((item) => (
              <article className="listCard" key={item}>{item}</article>
            ))}
          </div>
        </section>

        <section id="contact" className="section muted">
          <div className="twoColumn">
            <div>
              <div className="eyebrow">{t.contact.eyebrow}</div>
              <h2>{t.contact.title}</h2>
              <p className="contactIntro">{t.contact.text}</p>
            </div>

            <form className="contactBox">
              <input placeholder={t.contact.name} />
              <input placeholder={t.contact.company} />
              <input placeholder={t.contact.email} />
              <input placeholder={t.contact.phone} />
              <textarea rows="6" placeholder={t.contact.message}></textarea>
              <button className="solidBtn" type="button">{t.contact.submit}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footerLogo">ZHERON PRECISION</div>
          <div className="footerText">{t.footer.line}</div>
        </div>

        <div className="footerText">{t.footer.rights}</div>
      </footer>
    </div>
  );
}
