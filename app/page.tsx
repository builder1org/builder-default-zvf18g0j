import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ShopSection } from "./components/ShopSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <div className="hero__badge">
                <span aria-hidden>✓</span>
                اصل بودن کالا — گارانتی معتبر
              </div>
              <h1>لاستیک مناسب خودروی شما، با بهترین قیمت</h1>
              <p>
                فروشگاه تخصصی لاستیک با ده‌ها برند معتبر. مشاوره رایگان، نصب
                حرفه‌ای و ارسال به سراسر شهر.
              </p>
              <div className="hero__actions">
                <a href="#products" className="btn btn--primary">
                  مشاهده محصولات
                </a>
                <a href="#contact" className="btn btn--ghost">
                  تماس با ما
                </a>
              </div>
              <div className="hero__stats">
                <div className="stat">
                  <strong>+۵۰۰</strong>
                  <span>مدل لاستیک</span>
                </div>
                <div className="stat">
                  <strong>۱۵+</strong>
                  <span>برند معتبر</span>
                </div>
                <div className="stat">
                  <strong>۱۰ سال</strong>
                  <span>تجربه</span>
                </div>
              </div>
            </div>
            <div className="hero__visual">
              <div className="tire-icon" aria-hidden />
              <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                نصب، بالانس و تنظیم باد — در همان روز تحویل
              </p>
            </div>
          </div>
        </section>

        <ShopSection />

        <section id="features" className="section features">
          <div className="container">
            <div className="section__head">
              <h2 style={{ color: "#fff" }}>چرا لاستیک‌خانه؟</h2>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>
                خدماتی که کنار فروش لاستیک به شما ارائه می‌دهیم.
              </p>
            </div>
            <div className="features__grid">
              <div className="feature-item">
                <div className="feature-item__icon" aria-hidden>
                  🔧
                </div>
                <h3>نصب و بالانس</h3>
                <p>تجهیزات دیجیتال و تکنسین مجرب</p>
              </div>
              <div className="feature-item">
                <div className="feature-item__icon" aria-hidden>
                  🚚
                </div>
                <h3>ارسال سریع</h3>
                <p>تحویل در تهران و شهرهای اطراف</p>
              </div>
              <div className="feature-item">
                <div className="feature-item__icon" aria-hidden>
                  💳
                </div>
                <h3>پرداخت اقساطی</h3>
                <p>همکاری با فروشگاه‌های معتبر</p>
              </div>
              <div className="feature-item">
                <div className="feature-item__icon" aria-hidden>
                  📋
                </div>
                <h3>مشاوره رایگان</h3>
                <p>انتخاب سایز و برند مناسب خودرو</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="section__head">
              <h2>تماس با ما</h2>
              <p>برای استعلام قیمت یا رزرو نوبت نصب با ما در ارتباط باشید.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>اطلاعات تماس</h3>
                <ul className="contact-list">
                  <li>
                    <span aria-hidden>📍</span>
                    <span>تهران، خیابان نمونه، پلاک ۱۲ — فروشگاه لاستیک‌خانه</span>
                  </li>
                  <li>
                    <span aria-hidden>📞</span>
                    <a href="tel:02112345678">۰۲۱-۱۲۳۴۵۶۷۸</a>
                  </li>
                  <li>
                    <span aria-hidden>📱</span>
                    <a href="tel:09121234567">۰۹۱۲-۱۲۳۴۵۶۷</a>
                  </li>
                  <li>
                    <span aria-hidden>✉️</span>
                    <a href="mailto:info@lastick-home.example">info@lastick-home.example</a>
                  </li>
                </ul>
                <a
                  href="tel:02112345678"
                  className="btn btn--primary"
                  style={{ width: "100%", marginTop: 16 }}
                >
                  تماس برای استعلام
                </a>
              </div>
              <div className="map-placeholder">
                <span>📍 نقشه فروشگاه (قابل اتصال به Google Maps)</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
