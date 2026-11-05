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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <div className="top-bar__actions">
            <button type="button" className="icon-btn icon-btn--filled" aria-label="علاقه‌مندی‌ها">
              <span className="icon-btn__circle">♥</span>
            </button>
            <button type="button" className="cart-widget" aria-label="سبد خرید">
              <span className="cart-widget__label">
                قیمت نهایی: <strong>۰ تومان</strong>
              </span>
              <span className="cart-widget__icon">
                <span className="cart-widget__badge">۰</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="20" r="1.2" fill="currentColor" />
                  <circle cx="17" cy="20" r="1.2" fill="currentColor" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container main-nav__inner">
          <div className="main-nav__start">
            <button type="button" className="main-nav__vehicle">
              انتخاب خودرو
            </button>
            <button type="button" className="main-nav__hamburger" aria-label="منو">
              <span />
              <span />
              <span />
            </button>
          </div>
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
