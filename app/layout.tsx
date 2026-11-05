import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "لاستیک‌خانه | فروشگاه لاستیک خودرو",
  description:
    "فروش لاستیک سواری، شاسی‌بلند و تجاری — برندهای معتبر، نصب و بالانس در محل.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
