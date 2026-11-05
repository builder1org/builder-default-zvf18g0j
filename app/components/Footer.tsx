export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="logo" style={{ marginBottom: 12 }}>
            <span className="logo__mark" aria-hidden>
              ⭕
            </span>
            <span>لاستیک‌خانه</span>
          </div>
          <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>
            فروشگاه تخصصی لاستیک خودرو با برندهای معتبر جهانی. نصب، بالانس و
            مشاوره رایگان — همراه شما در هر فصل.
          </p>
        </div>
        <div>
          <h4>دسترسی سریع</h4>
          <ul>
            <li>
              <a href="#products">محصولات</a>
            </li>
            <li>
              <a href="#categories">دسته‌بندی</a>
            </li>
            <li>
              <a href="#contact">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>ساعات کاری</h4>
          <ul>
            <li>شنبه تا چهارشنبه: ۹ تا ۲۰</li>
            <li>پنج‌شنبه: ۹ تا ۱۴</li>
            <li>جمعه: تعطیل</li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        © {year} لاستیک‌خانه — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
