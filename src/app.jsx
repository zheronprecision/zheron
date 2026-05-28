// Footer bölümü güncellenmiş App.jsx
// Mevcut dosyandaki footer kısmını bununla değiştirilmiş haliyle kullan

<footer className="footer">
  <div className="footerLeft">
    <LogoBlock />

    <p className="footerDescription">
      Defense & aerospace-grade precision component manufacturing.
    </p>

    <p className="footerDiscipline">
      Tight tolerances. Measured processes. Reliable delivery.
    </p>
  </div>

  <div className="footerRight">
    <div className="footerColumn">
      <span className="footerLabel">
        {lang === "tr" ? "İletişim" : "Contact"}
      </span>

      <a href="mailto:info@zheronprecision.com">
        info@zheronprecision.com
      </a>

      <a href="tel:+905000000000">
        +90 500 000 00 00
      </a>
    </div>

    <div className="footerColumn">
      <span className="footerLabel">
        {lang === "tr" ? "Lokasyon" : "Location"}
      </span>

      <span>Ankara / Türkiye</span>
      <span>
        {lang === "tr"
          ? "Hassas parça üretimi"
          : "Precision component manufacturing"}
      </span>
    </div>
  </div>

  <div className="footerBottomLine">
    <span>{t.footer.rights}</span>
  </div>
</footer>
