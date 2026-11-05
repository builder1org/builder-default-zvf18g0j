"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar__inner">
          <Link href="/" className="logo logo--brand">
            <span className="logo__mark" aria-hidden>
              L
            </span>
            <span className="logo__title">لاستیک‌خانه</span>
          </Link>

          <form className="search-bar" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              name="q"
              placeholder="جستجوی محصولات..."
              aria-label="جستجوی محصولات"
            />
            <button type="submit" className="search-bar__btn" aria-label="جستجو">
              🔍
            </button>
          </form>

          <div className="top-bar__actions">
            <button type="button" className="icon-btn" aria-label="علاقه‌مندی‌ها">
              <span className="icon-btn__circle">♥</span>
            </button>
            <button type="button" className="cart-pill" aria-label="سبد خرید">
              <span className="cart-pill__icon">🛒</span>
              <span className="cart-pill__badge">۰</span>
              <span className="cart-pill__text">
                قیمت نهایی: <strong>۰ تومان</strong>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container main-nav__inner">
          <button type="button" className="main-nav__vehicle">
            <span className="main-nav__menu-icon" aria-hidden>
              ☰
            </span>
            انتخاب خودرو
          </button>
          <nav className="main-nav__links" aria-label="منوی فروشگاه">
            <a href="#products" className="main-nav__link">
              لاستیک <span className="chev">▾</span>
            </a>
            <a href="#products" className="main-nav__link">
              لاستیک دولتی
            </a>
            <a href="#products" className="main-nav__link">
              رینگ
            </a>
            <a href="#features" className="main-nav__link">
              مطالب آموزشی
            </a>
            <a href="#features" className="main-nav__link">
              درباره ما
            </a>
            <a href="#contact" className="main-nav__link">
              تماس با ما
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
