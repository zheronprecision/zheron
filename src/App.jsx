import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight, Mail, Phone, MapPin, CheckCircle2,
  Ruler, FileCheck2, Clock3, Settings
} from "lucide-react";
import "./style.css";

const strengths = [
  { icon: <Ruler size={26} />, title: "Hassas Üretim", text: "Teknik resme uygun, ölçüsel kararlılığı yüksek parça üretimi." },
  { icon: <FileCheck2 size={26} />, title: "İzlenebilir Süreç", text: "Üretim adımlarında dokümantasyon, kontrol ve takip disiplini." },
  { icon: <Settings size={26} />, title: "Üretilebilirlik Yaklaşımı", text: "Parça geometrisi, malzeme ve tolerans gerekliliklerine göre teknik değerlendirme." },
  { icon: <Clock3 size={26} />, title: "Termin Disiplini", text: "Planlı üretim, açık iletişim ve sürdürülebilir tedarik anlayışı." },
];

const capabilities = [
  "CNC dik işleme",
  "CNC torna operasyonları",
  "Prototip parça üretimi",
  "Düşük ve orta adetli seri üretim",
  "Alüminyum, çelik ve paslanmaz çelik işleme",
  "Teknik resme göre imalat",
  "Boyutsal kontrol ve raporlama",
  "Tedarikçi dokümantasyon desteği",
];

const sectors = [
  "Savunma sanayi",
  "Havacılık",
  "Endüstriyel sistemler",
  "Makine imalatı",
  "Robotik ve otomasyon",
  "Yüksek teknoloji ekipmanları",
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="glow" />

        <nav className="nav">
          <div className="brand">
            <div className="brand-symbol"><span /><span /><span /><span /></div>
            <div className="brand-title">ZHERON</div>
          </div>

          <div className="nav-links">
            <a href="#capabilities">Kabiliyetler</a>
            <a href="#quality">Kalite Yaklaşımı</a>
            <a href="#sectors">Sektörler</a>
            <a href="#contact">İletişim</a>
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">Savunma ve havacılık standartlarında hassas parça üretimi</p>
            <h1>Teknik resme bağlı, kontrollü ve izlenebilir üretim.</h1>
            <p className="slogan">Precision for perfection</p>
            <p className="lead">
              Zheron; savunma, havacılık ve yüksek teknoloji sektörleri için hassas mekanik parçalar üretir.
              Önceliğimiz yalnızca parçayı işlemek değil; tolerans, malzeme, termin, dokümantasyon ve tekrar edilebilirlik bütününü doğru yönetmektir.
            </p>

            <div className="actions">
              <a className="primary" href="#contact">Teklif ve teknik resim gönder <ArrowRight size={20} /></a>
              <a className="secondary" href="#capabilities">Üretim kabiliyetleri</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="focus-card">
            <div className="focus-top"><span>Üretim yaklaşımı</span><b>tedarikçi odaklı</b></div>
            {[
              "Önce teknik resim ve tolerans analizi",
              "Malzeme ve operasyon sırası değerlendirmesi",
              "Boyutsal kontrol ve üretim tekrarlanabilirliği",
              "Açık termin, net iletişim, uzun vadeli tedarik ilişkisi",
            ].map((item) => (
              <div className="focus-row" key={item}><CheckCircle2 size={21} /><span>{item}</span></div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="proof-strip">
        {strengths.map((item) => (
          <div key={item.title}>
            <div className="strip-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section id="capabilities" className="section">
        <div className="section-head">
          <p className="eyebrow">Kabiliyetlerimiz</p>
          <h2>Atölye diliyle, net üretim kabiliyeti.</h2>
          <p>Zheron, genel amaçlı işçilikten çok teknik resme bağlı, ölçüsel kontrol gerektiren ve tedarik sürekliliği isteyen parçalar için konumlanır.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section id="quality" className="band">
        <div className="band-grid">
          <div>
            <p className="eyebrow">Kalite yaklaşımı</p>
            <h2>Kalite son kontrolde değil, üretim planında başlar.</h2>
          </div>
          <div className="text-block">
            <p>Hassas imalatta güven yalnızca iyi tezgâhla sağlanmaz. Doğru malzeme seçimi, bağlama stratejisi, operasyon sırası, ölçüm yaklaşımı ve kayıt disiplini aynı zincirin parçalarıdır.</p>
            <p>Zheron’da hedef; tekrarlanabilir, takip edilebilir ve satın alma ekiplerinin rahatlıkla yönetebileceği bir üretim süreci oluşturmaktır.</p>
          </div>
        </div>
      </section>

      <section id="sectors" className="section">
        <div className="section-head">
          <p className="eyebrow">Sektörler</p>
          <h2>Yüksek hassasiyet ve güvenilir tedarik gerektiren alanlar.</h2>
        </div>
        <div className="industry-grid">
          {sectors.map((sector) => <div key={sector}>{sector}</div>)}
        </div>
      </section>

      <section className="section statement-section">
        <div className="statement">
          <p className="eyebrow">Zheron yaklaşımı</p>
          <h2>Bizim için üretim, parçayı teslim etmekten ibaret değildir.</h2>
          <p>Bir tedarikçinin değeri; çizimi anlama, riski önceden görme, süreci doğru planlama ve teslim sonrası aynı kaliteyi tekrar sağlayabilme kabiliyetiyle ölçülür. Zheron bu anlayışla yapılandırılmaktadır.</p>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <div className="footer-brand">ZHERON</div>
          <p>Precision for perfection</p>
          <p className="footer-note">Savunma, havacılık ve endüstriyel üretim için hassas mekanik parça imalatı.</p>
        </div>
        <div className="contact-grid">
          <div><Mail size={21} /><span>E-posta</span><b>info@zheron.com.tr</b></div>
          <div><Phone size={21} /><span>Telefon</span><b>+90 XXX XXX XX XX</b></div>
          <div><MapPin size={21} /><span>Lokasyon</span><b>Ankara, Türkiye</b></div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
