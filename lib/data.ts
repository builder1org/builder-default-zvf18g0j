export type CategoryId =
  | "all"
  | "passenger"
  | "suv"
  | "commercial"
  | "winter"
  | "all-season";

export type Product = {
  id: string;
  name: string;
  brand: string;
  size: string;
  price: number;
  category: Exclude<CategoryId, "all">;
  badge?: string;
  tags: string[];
  inStock: boolean;
};

export const categories: { id: CategoryId; label: string; icon: string }[] = [
  { id: "all", label: "همه", icon: "📦" },
  { id: "passenger", label: "سواری", icon: "🚗" },
  { id: "suv", label: "شاسی‌بلند", icon: "🚙" },
  { id: "commercial", label: "وانت و سنگین", icon: "🛻" },
  { id: "winter", label: "زمستانی", icon: "❄️" },
  { id: "all-season", label: "چهارفصل", icon: "☀️" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "پرزا P7",
    brand: "پیرلی",
    size: "205/55R16",
    price: 4_850_000,
    category: "passenger",
    badge: "پرفروش",
    tags: ["چهارفصل", "کم‌صدا"],
    inStock: true,
  },
  {
    id: "2",
    name: "Cinturato P1",
    brand: "پیرلی",
    size: "185/65R15",
    price: 3_200_000,
    category: "passenger",
    tags: ["مصرف سوخت کم"],
    inStock: true,
  },
  {
    id: "3",
    name: "Scorpion Verde",
    brand: "پیرلی",
    size: "255/60R18",
    price: 7_400_000,
    category: "suv",
    badge: "جدید",
    tags: ["آفرود سبک", "چهارفصل"],
    inStock: true,
  },
  {
    id: "4",
    name: "Latitude Sport 3",
    brand: "میشلن",
    size: "235/55R19",
    price: 8_900_000,
    category: "suv",
    tags: ["عملکرد بالا"],
    inStock: true,
  },
  {
    id: "5",
    name: "Energy XM2+",
    brand: "میشلن",
    size: "195/65R15",
    price: 3_650_000,
    category: "passenger",
    tags: ["دوام بالا"],
    inStock: true,
  },
  {
    id: "6",
    name: "WinterContact TS 870",
    brand: "کنتینental",
    size: "205/55R16",
    price: 5_100_000,
    category: "winter",
    badge: "زمستانی",
    tags: ["گل‌یخ", "ایمن"],
    inStock: true,
  },
  {
    id: "7",
    name: "Blizzak LM005",
    brand: "بریجستون",
    size: "215/60R17",
    price: 6_200_000,
    category: "winter",
    tags: ["برف و یخ"],
    inStock: false,
  },
  {
    id: "8",
    name: "Turanza All Season",
    brand: "بریجستون",
    size: "225/50R17",
    price: 5_750_000,
    category: "all-season",
    tags: ["چهارفصل", "راحتی"],
    inStock: true,
  },
  {
    id: "9",
    name: "Ecopia EP150",
    brand: "بریجستون",
    size: "175/65R14",
    price: 2_450_000,
    category: "passenger",
    tags: ["اقتصادی"],
    inStock: true,
  },
  {
    id: "10",
    name: "VanContact Winter",
    brand: "کنتینental",
    size: "195/70R15C",
    price: 4_300_000,
    category: "commercial",
    tags: ["وانت", "زمستانی"],
    inStock: true,
  },
  {
    id: "11",
    name: "Agilis CrossClimate",
    brand: "میشلن",
    size: "215/65R16C",
    price: 5_900_000,
    category: "commercial",
    badge: "تجاری",
    tags: ["چهارفصل", "باربری"],
    inStock: true,
  },
  {
    id: "12",
    name: "Primacy 4",
    brand: "میشلن",
    size: "215/55R17",
    price: 6_800_000,
    category: "all-season",
    tags: ["چهارفصل", "کم‌صدا"],
    inStock: true,
  },
];

export function formatPrice(toman: number): string {
  return new Intl.NumberFormat("fa-IR").format(toman);
}
