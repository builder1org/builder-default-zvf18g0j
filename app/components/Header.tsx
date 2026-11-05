import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo">
          <span className="logo__mark" aria-hidden>
            ⭕
          </span>
          <span>لاستیک‌خانه</span>
        </Link>
        <nav className="nav" aria-label="منوی اصلی">
          <a href="#products">محصولات</a>
          <a href="#categories">دسته‌بندی</a>
          <a href="#features">خدمات</a>
          <a href="#contact">تماس</a>
        </nav>
        <div className="header-cta">
          <a href="tel:02112345678" className="btn btn--ghost">
            📞 ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
        </div>
      </div>
    </header>
  );
}
