import { useState } from "react";

const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      skills: "Beceriler",
      process: "Proses",
      materials: "Malzemeler",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "Savunma ve Havacılık Seviyesinde Hassas Parça Üretimi",
      title: "Kontrollü üretim. Ölçülebilir kalite.",
      tagline: "Tolerans, yüzey kalitesi ve teslim disiplini gerektiren parçalar için.",
      paragraphs: [
        "ZHERON; savunma, havacılık ve yüksek hassasiyet gerektiren endüstriyel uygulamalar için tolerans kontrollü işlenmiş parçalar üretir.",
        "Üretimde hacim iddialarından çok; yüzey kalitesi, ölçüsel tutarlılık, proses disiplini ve teslim güvenilirliğine odaklanırız.",
      ],
      primary: "Becerileri İncele",
      secondary: "Teknik İletişim",
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
          text: "Kararlı işleme yaklaşımı, ölçüm akışı ve tekrarlanabilir üretim mantığı.",
        },
        {
          title: "Teslim Güvenilirliği",
          text: "Planlı üretim yönetimi ve sorumluluğu net teslim süreçleri.",
        },
      ],
    },
    why: {
      eyebrow: "Neden ZHERON",
      title: "Disiplinli üretim neden önemlidir?",
      paragraphs: [
        "Hassas üretimde yalnızca üretim kabiliyeti yeterli değildir. Tutarlılık, ölçüm kültürü ve proses kararlılığı; bir tedarikçinin sürdürülebilir şekilde güvenilir olup olmadığını belirler.",
        "ZHERON; işleme yaklaşımından final ölçüm ve sevkiyat koordinasyonuna kadar kontrollü üretim anlayışına odaklanır.",
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
          text: "İşleme yaklaşımı, bağlama planlaması ve operasyon sıralaması.",
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
    skills: {
      eyebrow: "Beceriler",
      title: "Üretim Becerileri",
      items: [
        "CNC Freze",
        "CNC Torna",
        "Prototip Üretim",
        "Düşük Adet Hassas Üretim",
        "Bağlama Odaklı İşleme",
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
      title: "Teknik İletişim",
      text: "Teknik resimlerinizi veya üretim ihtiyaçlarınızı değerlendirme için bizimle paylaşın.",
      name: "Ad Soyad",
      company: "Firma",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesaj",
      submit: "Gönder",
    },
    footer: {
      line: "",
      rights: "© 2026 ZHERON. Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      process: "Process",
      materials: "Materials",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Defense & Aerospace-Grade Precision Component Manufacturing",
      title: "Controlled manufacturing. Measurable quality.",
      tagline: "For components requiring tolerance, surface quality and delivery discipline.",
      paragraphs: [
        "ZHERON manufactures high-tolerance machined components for defense, aerospace and industrial applications requiring process discipline, dimensional consistency and delivery reliability.",
        "We focus on controlled manufacturing rather than volume claims — with attention to surface quality, material traceability, machining stability and measurement integrity.",
      ],
      primary: "Explore Skills",
      secondary: "Technical Contact",
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
          text: "Stable machining approach, inspection workflow and repeatable production logic.",
        },
        {
          title: "Delivery Reliability",
          text: "Structured production planning and accountable lead-time management.",
        },
      ],
    },
    why: {
      eyebrow: "Why ZHERON",
      title: "Why disciplined manufacturing matters.",
      paragraphs: [
        "In precision manufacturing, capability alone is not enough. Consistency, inspection culture and process stability determine whether a supplier can be trusted repeatedly.",
        "ZHERON focuses on controlled execution — from machining approach to final measurement and delivery coordination.",
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
          text: "Machining approach, workholding planning and operation sequencing.",
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
    skills: {
      eyebrow: "Skills",
      title: "Manufacturing Skills",
      items: [
        "CNC Milling",
        "CNC Turning",
        "Prototype Manufacturing",
        "Low-Volume Precision Production",
        "Workholding-Oriented Machining",
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
      title: "Technical Contact",
      text: "Share your technical drawings or production requirements for evaluation.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send",
    },
    footer: {
      line: "",
      rights: "© 2026 ZHERON. All rights reserved.",
    },
  },
};

function LogoBlock() {
  return (
    <a href="#home" className="brand" aria-label="ZHERON Home">
      <img
        src="/images/zheron-logo.png"
        alt="ZHERON"
        className="brandLogo"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = "block";
        }}
      />
      <div className="logoFallback">ZHERON</div>
      <div className="logoSub">PRECISION FOR PERFECTION</div>
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useState("tr");
  const t = content[lang];

  return (
    <div className="site">
      <header className="navbar">
        <LogoBlock />

        <nav>
          <a href="#home">{t.nav.home}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#materials">{t.nav.materials}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <button className="langSwitch" onClick={() => setLang(lang === "tr" ? "en" : "tr")}>
          {lang === "tr" ? "EN" : "TR"}
        </button>
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
              <a className="solidBtn" href="#skills">{t.hero.primary}</a>
              <a className="outlineBtn" href="#contact">{t.hero.secondary}</a>
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
            {t.process.items.map((item) => (
              <article className="card processCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="sectionHeader">
            <div className="eyebrow">{t.skills.eyebrow}</div>
            <h2>{t.skills.title}</h2>
          </div>

          <div className="gridThree">
            {t.skills.items.map((item) => (
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
          <LogoBlock />
        </div>

        <div className="footerText">{t.footer.rights}</div>
      </footer>
    </div>
  );
}
