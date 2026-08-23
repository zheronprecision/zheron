import { useState } from "react";

const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      skills: "Beceriler",
      process: "Proses",
      materials: "Malzemeler",
      machines: "Makine Parkuru",
      certifications: "Sertifikasyon",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "Savunma ve Havacılık Seviyesinde Hassas Parça Üretimi",
      title: "Kontrollü üretim, ölçülebilir kalite",
      tagline: "Tolerans, yüzey kalitesi ve teslim disiplini gerektiren parça ihtiyaçlarınız için",
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
      title: "Kritik uygulamalar için hassas üretim",
      cards: [
        {
          title: "Yüksek Toleranslı İşleme",
          text: "Kontrollü ölçüsel tutarlılığa sahip kompleks hassas parçaların üretimi",
        },
        {
          title: "Proses Disiplini",
          text: "Kararlı işleme yaklaşımı, ölçüm akışı ve tekrarlanabilir üretim mantığı",
        },
        {
          title: "Teslim Güvenilirliği",
          text: "Planlı üretim yönetimi ve sorumluluğu net teslim süreçleri",
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
          text: "Teknik resim değerlendirmesi, tolerans analizi ve üretilebilirlik incelemesi",
        },
        {
          title: "Proses Planlama",
          text: "İşleme yaklaşımı, bağlama planlaması ve operasyon sıralaması",
        },
        {
          title: "Kontrollü İşleme",
          text: "Ölçüsel takip ile kararlı ve tekrarlanabilir üretim",
        },
        {
          title: "Ölçüm ve Doğrulama",
          text: "Ölçüm temelli kalite kontrol ve dokümantasyon disiplini",
        },
        {
          title: "Teslimat Koordinasyonu",
          text: "Koruyucu paketleme ve planlı sevkiyat yönetimi",
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
        "Takım Çelikleri",
        "Pirinç ve Bakır Alaşımları",
      ],
    },
    machinePark: {
      eyebrow: "Makine Parkuru",
      title: "Çok Eksenli İşleme Kabiliyeti",
      intro: "Torna-freze ve dik işleme altyapımız; karmaşık geometriler, çoklu operasyonlar ve hassas tolerans gerektiren parçalar için yapılandırılmıştır.",
      machines: [
        {
          name: "BIGLIA B501 Y-S",
          type: "Y eksenli CNC torna / freze merkezi",
          image: "/images/biglia-b501-ys.jpg",
          specs: ["Y ekseni + karşı iş mili", "Canlı takım", "500 mm işleme boyu", "Ø250 mm tornalama kapasitesi"],
        },
        {
          name: "HARDINGE GS-200 MSY",
          type: "Çok eksenli CNC torna / freze merkezi",
          image: "/images/hardinge-gs200-msy.jpg",
          specs: ["Y ekseni + sub-spindle", "12 istasyon canlı takımlı taret", "C ekseni", "4.500 rpm ana iş mili"],
        },
        {
          name: "HISION CFV 1100",
          type: "Dik işleme merkezi",
          image: "/images/hision-cfv1100.jpg",
          specs: ["X/Y/Z: 1100 / 540 / 520 mm", "12.000 rpm iş mili", "36 m/dk hızlı hareket", "24 takımlı ATC"],
        },
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
      material: "Malzeme / Alaşım",
      quantity: "Adet",
      deadline: "İstenen termin",
      drawing: "Teknik resim / STEP / PDF",
      message: "Parça, tolerans veya özel gereksinimler",
      submit: "RFQ E-postası Oluştur",
      fileNote: "Dosyanızı seçin; e-posta açıldığında seçtiğiniz dosyayı ek olarak iliştirin.",
    },
    certifications: {
      eyebrow: "Sertifikasyon",
      title: "Belgelenmiş yönetim sistemleri",
      text: "ZHERON; kalite, çevre, iş sağlığı ve güvenliği ile müşteri memnuniyeti yönetim sistemlerini uluslararası ISO standartları doğrultusunda belgelendirmiştir.",
      certificates: [
        { code: "ISO 9001", name: "Kalite Yönetim Sistemi", image: "/images/iso-9001.jpg" },
        { code: "ISO 14001", name: "Çevre Yönetim Sistemi", image: "/images/iso-14001.jpg" },
        { code: "ISO 45001", name: "İş Sağlığı ve Güvenliği Yönetim Sistemi", image: "/images/iso-45001.jpg" },
        { code: "ISO 10002", name: "Müşteri Memnuniyeti Yönetim Sistemi", image: "/images/iso-10002.jpg" },
      ],
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
      machines: "Machine Park",
      certifications: "Certification",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Defense & Aerospace-Grade Precision Component Manufacturing",
      title: "Controlled Manufacturing, Measurable Quality",
      tagline: "For components requiring tolerance, surface quality and delivery discipline",
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
          text: "Complex precision components with controlled dimensional consistency",
        },
        {
          title: "Process Discipline",
          text: "Stable machining approach, inspection workflow and repeatable production logic",
        },
        {
          title: "Delivery Reliability",
          text: "Structured production planning and accountable lead-time management",
        },
      ],
    },
    why: {
      eyebrow: "Why ZHERON",
      title: "Why Disciplined Manufacturing Matters",
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
    machinePark: {
      eyebrow: "Machine Park",
      title: "Multi-Axis Machining Capability",
      intro: "Our turn-mill and vertical machining infrastructure is configured for complex geometries, multi-operation components and demanding dimensional requirements.",
      machines: [
        {
          name: "BIGLIA B501 Y-S",
          type: "Y-axis CNC turning / milling center",
          image: "/images/biglia-b501-ys.jpg",
          specs: ["Y-axis + sub-spindle", "Live tooling", "500 mm machining length", "Ø250 mm turning capacity"],
        },
        {
          name: "HARDINGE GS-200 MSY",
          type: "Multi-axis CNC turning / milling center",
          image: "/images/hardinge-gs200-msy.jpg",
          specs: ["Y-axis + sub-spindle", "12-station live-tool turret", "C-axis", "4,500 rpm main spindle"],
        },
        {
          name: "HISION CFV 1100",
          type: "Vertical machining center",
          image: "/images/hision-cfv1100.jpg",
          specs: ["X/Y/Z: 1100 / 540 / 520 mm", "12,000 rpm spindle", "36 m/min rapid traverse", "24-tool ATC"],
        },
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
      material: "Material / Alloy",
      quantity: "Quantity",
      deadline: "Requested lead time",
      drawing: "Drawing / STEP / PDF",
      message: "Part, tolerance or special requirements",
      submit: "Create RFQ Email",
      fileNote: "Select your file; when your email opens, attach the selected file to the message.",
    },
    certifications: {
      eyebrow: "Certification",
      title: "Certified management systems",
      text: "ZHERON has certified its management systems for quality, environment, occupational health and safety, and customer satisfaction in accordance with international ISO standards.",
      certificates: [
        { code: "ISO 9001", name: "Quality Management System", image: "/images/iso-9001.jpg" },
        { code: "ISO 14001", name: "Environmental Management System", image: "/images/iso-14001.jpg" },
        { code: "ISO 45001", name: "Occupational Health & Safety Management System", image: "/images/iso-45001.jpg" },
        { code: "ISO 10002", name: "Customer Satisfaction Management System", image: "/images/iso-10002.jpg" },
      ],
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
        src="/images/zheron-logo-v3.png"
        alt="ZHERON"
        className="brandLogo"
      />
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
          <a href="#machine-park">{t.nav.machines}</a>
          <a href="#certifications">{t.nav.certifications}</a>
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


        <section id="machine-park" className="section muted machineParkSection">
          <div className="sectionHeader machineParkHeader">
            <div>
              <div className="eyebrow">{t.machinePark.eyebrow}</div>
              <h2>{t.machinePark.title}</h2>
            </div>
            <p className="machineParkIntro">{t.machinePark.intro}</p>
          </div>

          <div className="machineGrid">
            {t.machinePark.machines.map((machine) => (
              <article className="machineCard" key={machine.name}>
                <div className="machineImageWrap">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="machineImage"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div className="machineImageOverlay"></div>
                </div>
                <div className="machineBody">
                  <div className="machineType">{machine.type}</div>
                  <h3>{machine.name}</h3>
                  <div className="machineSpecs">
                    {machine.specs.map((spec) => <span key={spec}>{spec}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section certificationSection">
          <div className="sectionHeader certificationHeader">
            <div className="eyebrow">{t.certifications.eyebrow}</div>
            <h2>{t.certifications.title}</h2>
            <p className="certificationText">{t.certifications.text}</p>
          </div>

          <div className="certificationCards">
            {t.certifications.certificates.map((certificate) => (
              <article className="certificateCard" key={certificate.code}>
                <div className="certificateImageWrap">
                  <img
                    src={certificate.image}
                    alt={`${certificate.code} ${certificate.name}`}
                    className="certificateImage"
                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="certificateMeta">
                  <div className="certificateCode">{certificate.code}</div>
                  <div className="certificateName">{certificate.name}</div>
                </div>
              </article>
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

            <form className="contactBox" onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = `RFQ - ${fd.get("company") || fd.get("name") || "Website"}`;
              const body = [
                `${t.contact.name}: ${fd.get("name") || "-"}`,
                `${t.contact.company}: ${fd.get("company") || "-"}`,
                `${t.contact.email}: ${fd.get("email") || "-"}`,
                `${t.contact.phone}: ${fd.get("phone") || "-"}`,
                `${t.contact.material}: ${fd.get("material") || "-"}`,
                `${t.contact.quantity}: ${fd.get("quantity") || "-"}`,
                `${t.contact.deadline}: ${fd.get("deadline") || "-"}`,
                "",
                `${t.contact.message}:`,
                fd.get("message") || "-",
              ].join("\n");
              window.location.href = `mailto:info@zheron.com.tr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}>
              <div className="rfqRow">
                <input name="name" placeholder={t.contact.name} required />
                <input name="company" placeholder={t.contact.company} required />
              </div>
              <div className="rfqRow">
                <input name="email" type="email" placeholder={t.contact.email} required />
                <input name="phone" placeholder={t.contact.phone} />
              </div>
              <div className="rfqRow">
                <input name="material" placeholder={t.contact.material} />
                <input name="quantity" type="number" min="1" placeholder={t.contact.quantity} />
              </div>
              <input name="deadline" placeholder={t.contact.deadline} />
              <label className="fileUpload">
                <span>{t.contact.drawing}</span>
                <input name="drawing" type="file" accept=".pdf,.step,.stp,.stl,.iges,.igs,.dxf,.dwg,.zip" />
              </label>
              <div className="fileNote">{t.contact.fileNote}</div>
              <textarea name="message" rows="6" placeholder={t.contact.message}></textarea>
              <button className="solidBtn" type="submit">{t.contact.submit}</button>
            </form>
          </div>
        </section>
      </main>

      
      <footer className="footer">
        <div className="footerTop">
          <div className="footerBrand">
            <LogoBlock />

            <p className="footerDiscipline">
              Tight Tolerances. Measured Processes. Reliable Delivery.
            </p>
          </div>

          <div className="footerColumn">
            <div className="footerLabel">
              {lang === "tr" ? "İletişim" : "Contact"}
            </div>

            <a href="mailto:info@zheron.com.tr">info@zheron.com.tr</a>
            <a href="tel:+903125440800">+90 (312) 544 08 00</a>
            <span>Ostim OSB 1200 Cad No 28 Ankara / Türkiye</span>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerText">{t.footer.rights}</div>
        </div>
      </footer>

    </div>
  );
}
