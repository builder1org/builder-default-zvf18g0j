"use client";

import { useMemo, useState } from "react";
import {
  categories,
  products,
  formatPrice,
  type CategoryId,
} from "../../lib/data";

function ProductCard({
  name,
  brand,
  size,
  price,
  badge,
  tags,
  inStock,
}: (typeof products)[0]) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        {badge ? <span className="product-card__badge">{badge}</span> : null}
        <div className="product-card__image-inner" aria-hidden />
      </div>
      <div className="product-card__body">
        <span className="product-card__brand">{brand}</span>
        <h3 className="product-card__title">{name}</h3>
        <p className="product-card__size">سایز: {size}</p>
        <div className="product-card__tags">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
          {!inStock ? (
            <span className="tag" style={{ background: "#fee2e2", color: "#b91c1c" }}>
              ناموجود
            </span>
          ) : null}
        </div>
        <div className="product-card__footer">
          <div className="price">
            {formatPrice(price)}
            <small> تومان</small>
          </div>
          <button
            type="button"
            className="btn btn--outline"
            disabled={!inStock}
            style={{ opacity: inStock ? 1 : 0.5 }}
          >
            {inStock ? "استعلام" : "ناموجود"}
          </button>
        </div>
      </div>
    </article>
  );
}

export function ShopSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section id="categories" className="section" style={{ paddingBottom: 24 }}>
        <div className="container">
          <div className="section__head">
            <h2>دسته‌بندی محصولات</h2>
            <p>بر اساس نوع خودرو یا فصل، لاستیک مناسب را پیدا کنید.</p>
          </div>
          <div className="categories" role="tablist" aria-label="فیلتر دسته">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={
                  activeCategory === cat.id
                    ? "category-chip category-chip--active"
                    : "category-chip"
                }
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="category-chip__icon" aria-hidden>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="section__head">
            <h2>محصولات</h2>
            <p>نمونه‌ای از موجودی فروشگاه — قیمت‌ها به‌روزرسانی می‌شوند.</p>
          </div>
          <div className="products-toolbar">
            <span className="products-count">
              {filtered.length} محصول
              {activeCategory !== "all"
                ? ` در دسته «${categories.find((c) => c.id === activeCategory)?.label}»`
                : ""}
            </span>
            {activeCategory !== "all" ? (
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => setActiveCategory("all")}
              >
                نمایش همه
              </button>
            ) : null}
          </div>
          {filtered.length === 0 ? (
            <div className="empty-state">
              در این دسته محصولی ثبت نشده است.
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
