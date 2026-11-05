import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ShopSection } from "./components/ShopSection";
import { HeroPromo, FloatingSupport } from "./components/HeroPromo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroPromo />

        <ShopSection />

        <section id="features" className="section features">
          <div className="container">
            <div className="section__head">
              <h2 style={{ color: "#fff" }}>چرا لاستیک‌خانه؟</h2>
              <p style={{ color: "rgba(255,255,255,0.75)" }}>
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

        <section id="contact" className="section section--light">
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
      <FloatingSupport />
    </>
  );
}
