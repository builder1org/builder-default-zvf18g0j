export function HeroPromo() {
  return (
    <section className="promo-hero">
      <div className="container promo-hero__grid">
        <div className="promo-hero__main">
          <div className="promo-hero__main-content">
            <div className="promo-hero__mini-logo">
              <span className="logo__mark logo__mark--sm" aria-hidden>
                L
              </span>
              <span>لاستیک‌خانه</span>
            </div>
            <h1>انتخاب هوشمندانه و آسان لاستیک</h1>
            <p>
              با فیلترهای لاستیک‌خانه، لاستیک مناسب خودروی خود را به راحتی و
              آگاهانه انتخاب کنید.
            </p>
            <a href="#products" className="btn btn--primary btn--lg">
              مشاهده و انتخاب
            </a>
          </div>
        </div>

        <div className="promo-hero__side">
          <a href="#products" className="side-banner side-banner--tire">
            <div className="side-banner__visual" aria-hidden />
            <div className="side-banner__text">
              <strong>خرید انواع لاستیک</strong>
              <span>با خیال راحت و آسوده</span>
              <em>— انتخاب لاستیک</em>
            </div>
          </a>
          <a href="#products" className="side-banner side-banner--rim">
            <div className="side-banner__visual side-banner__visual--rim" aria-hidden />
            <div className="side-banner__text">
              <strong>خرید انواع رینگ</strong>
              <span>با خیال راحت و آسوده</span>
              <em>— انتخاب رینگ</em>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function FloatingSupport() {
  return (
    <a
      href="tel:02112345678"
      className="fab-support"
      aria-label="تماس با پشتیبانی"
    >
      📞
    </a>
  );
}
