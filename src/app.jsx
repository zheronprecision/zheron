import { useState } from "react";

const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      skills: "Üretim",
      process: "Üretim Akışı",
      materials: "Malzemeler",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "Savunma, Havacılık ve Kritik Endüstriler İçin Hassas İmalat",
      title: "Hassasiyet tesadüf değildir.",
      tagline: "Teknik resimden sevkiyata kadar ölçülebilir, izlenebilir ve kontrollü üretim",
      paragraphs: [
        "ZHERON; dar toleranslı, yüksek yüzey kalitesi gerektiren ve hata payının düşük olduğu parçaların üretimine odaklanır.",
        "Her işi yalnızca üretilecek bir parça olarak değil; malzeme, bağlama, işleme, ölçüm ve teslimat adımlarından oluşan bütüncül bir mühendislik süreci olarak ele alırız.",
      ],
      primary: "Üretim Alanlarını İncele",
      secondary: "Teknik Görüşme",
    },
    visual: {
      one: "Yüzey Bütünlüğü",
      two: "CMM Kontrolü",
      three: "Hassas Ölçüm",
      four: "Boyutsal Doğrulama",
    },
    what: {
      eyebrow: "Üretim Yaklaşımımız",
      title: "Kritik parçalar için güvenilir imalat",
      cards: [
        {
          title: "Dar Toleranslı İşleme",
          text: "Karmaşık geometrilerde boyutsal doğruluğu, tekrarlanabilirliği ve yüzey kalitesini birlikte gözeten üretim yaklaşımı.",
        },
        {
          title: "Kontrollü Üretim",
          text: "Malzeme girişinden son kontrole kadar tanımlı operasyonlar, kayıtlı ölçümler ve izlenebilir üretim adımları.",
        },
        {
          title: "Planlı Teslimat",
          text: "Gerçekçi termin, açık iletişim ve üretim planına bağlı sevkiyat yönetimi.",
        },
      ],
    },
    why: {
      eyebrow: "Neden ZHERON",
      title: "Güven, yalnızca parçayı üretmekle oluşmaz.",
      paragraphs: [
        "Hassas imalatta asıl fark, tezgâh kapasitesinden çok üretimin ne kadar doğru planlandığı, ölçüldüğü ve tekrar edilebildiğiyle ortaya çıkar.",
        "ZHERON; teknik değerlendirme, operasyon planlaması, ara kontroller, son ölçüm ve sevkiyat hazırlığını tek bir kalite zinciri içinde yönetir. Amacımız yalnızca uygun parça üretmek değil, her siparişte aynı güveni yeniden sağlamaktır.",
      ],
    },
    process: {
      eyebrow: "Nasıl Çalışıyoruz",
      title: "Teknik resimden teslimata",
      items: [
        {
          title: "Teknik Değerlendirme",
          text: "Teknik resim, toleranslar, yüzey beklentileri, malzeme ve üretilebilirlik birlikte incelenir.",
        },
        {
          title: "Operasyon Planlaması",
          text: "İşleme sırası, takım seçimi, bağlama yöntemi ve kontrol noktaları üretim öncesinde belirlenir.",
        },
        {
          title: "Hassas İşleme",
          text: "Parça geometrisine ve tolerans yapısına uygun parametrelerle kararlı üretim yürütülür.",
        },
        {
          title: "Ölçüm ve Doğrulama",
          text: "Kritik ölçüler uygun ekipmanlarla kontrol edilir; gerekli kayıtlar üretimle birlikte oluşturulur.",
        },
        {
          title: "Paketleme ve Sevkiyat",
          text: "Parçalar yüzey ve geometri bütünlüğünü koruyacak şekilde hazırlanır ve planlanan tarihte sevk edilir.",
        },
      ],
    },
    skills: {
      eyebrow: "Üretim",
      title: "Üretim Alanlarımız",
      items: [
        "CNC Freze İşleme",
        "CNC Torna İşleme",
        "Prototip ve İlk Numune Üretimi",
        "Düşük ve Orta Adetli Seri Üretim",
        "Fikstür ve Bağlama Çözümleri",
        "Yüksek Yüzey Kalitesi Gerektiren Parçalar",
      ],
    },
    materials: {
      eyebrow: "Malzemeler",
      title: "İşlediğimiz Malzemeler",
      items: [
        "Alüminyum Alaşımları",
        "Paslanmaz Çelikler",
        "Titanyum Alaşımları",
        "Takım ve Islah Çelikleri",
        "Pirinç ve Bakır Alaşımları",
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Parçanızı birlikte değerlendirelim.",
      text: "Teknik resminizi, yıllık adet bilginizi ve özel kalite beklentilerinizi paylaşın. Üretilebilirlik ve termin açısından net bir değerlendirme sunalım.",
      name: "Ad Soyad",
      company: "Firma",
      email: "E-posta",
      phone: "Telefon",
      message: "Parça, adet, malzeme ve teknik beklentiler",
      submit: "Gönder",
    },
    footer: {
      line: "Hassas Üretim. Ölçülebilir Kalite. Güvenilir Teslimat.",
      rights: "© 2026 ZHERON. Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      home: "Home",
      skills: "Manufacturing",
      process: "Workflow",
      materials: "Materials",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Precision Manufacturing for Defense, Aerospace and Critical Industries",
      title: "Precision is never accidental.",
      tagline: "Measured, traceable and controlled manufacturing from drawing review to delivery",
      paragraphs: [
        "ZHERON focuses on components with tight tolerances, demanding surface requirements and little room for variation.",
        "We treat every part as a complete engineering workflow involving material, workholding, machining, inspection and delivery—not merely as a machining operation.",
      ],
      primary: "Explore Manufacturing",
      secondary: "Technical Discussion",
    },
    visual: {
      one: "Surface Integrity",
      two: "CMM Inspection",
      three: "Precision Measurement",
      four: "Dimensional Verification",
    },
    what: {
      eyebrow: "Our Manufacturing Approach",
      title: "Reliable manufacturing for critical components",
      cards: [
        {
          title: "Tight-Tolerance Machining",
          text: "A manufacturing approach that balances dimensional accuracy, repeatability and surface quality across complex geometries.",
        },
        {
          title: "Controlled Production",
          text: "Defined operations, recorded measurements and traceable production steps from material receipt to final inspection.",
        },
        {
          title: "Planned Delivery",
          text: "Realistic lead times, clear communication and shipment management aligned with the production plan.",
        },
      ],
    },
    why: {
      eyebrow: "Why ZHERON",
      title: "Trust requires more than making the part.",
      paragraphs: [
        "In precision manufacturing, the real difference is not machine capacity alone, but how accurately the work is planned, measured and repeated.",
        "ZHERON manages technical review, operation planning, in-process checks, final inspection and shipment preparation as one continuous quality chain. Our aim is not simply to deliver an acceptable part, but to provide the same confidence with every order.",
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "From drawing review to delivery",
      items: [
        {
          title: "Technical Review",
          text: "Drawings, tolerances, surface requirements, material specifications and manufacturability are evaluated together.",
        },
        {
          title: "Operation Planning",
          text: "Machining sequence, tooling, workholding and inspection points are defined before production begins.",
        },
        {
          title: "Precision Machining",
          text: "Stable production is carried out using parameters selected for the geometry and tolerance structure of the part.",
        },
        {
          title: "Inspection and Verification",
          text: "Critical dimensions are checked with suitable equipment and the required production records are created.",
        },
        {
          title: "Packaging and Delivery",
          text: "Parts are prepared to protect surface and geometric integrity, then shipped according to the agreed schedule.",
        },
      ],
    },
    skills: {
      eyebrow: "Manufacturing",
      title: "Manufacturing Capabilities",
      items: [
        "CNC Milling",
        "CNC Turning",
        "Prototype and First-Article Production",
        "Low- and Medium-Volume Production",
        "Fixture and Workholding Solutions",
        "Components with Demanding Surface Requirements",
      ],
    },
    materials: {
      eyebrow: "Materials",
      title: "Materials We Machine",
      items: [
        "Aluminum Alloys",
        "Stainless Steels",
        "Titanium Alloys",
        "Tool and Engineering Steels",
        "Brass and Copper Alloys",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us review your component.",
      text: "Share your drawing, annual volume and specific quality requirements. We will provide a clear assessment of manufacturability and lead time.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Part, volume, material and technical requirements",
      submit: "Send",
    },
    footer: {
      line: "Precision Manufacturing. Measurable Quality. Reliable Delivery.",
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
        <div className="footerTop">
          <div className="footerBrand">
            <LogoBlock />

            <p className="footerDiscipline">{t.footer.line}</p>
          </div>

          <div className="footerColumn">
            <div className="footerLabel">
              {lang === "tr" ? "Lokasyon" : "Location"}
            </div>

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
