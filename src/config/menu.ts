// Menu content — placeholder dish names in italic-safe wording.
// Replace descriptions and prices once the final menu is provided.

export type Dish = {
  nameEn: string;
  nameAr: string;
  descEn?: string;
  descAr?: string;
  price?: string;
};

export type MenuSection = {
  id: string;
  titleEn: string;
  titleAr: string;
  dishes: Dish[];
};

export const MENU: MenuSection[] = [
  {
    id: "soups",
    titleEn: "Soups",
    titleAr: "الشوربات",
    dishes: [
      { nameEn: "Hot & Sour Soup", nameAr: "شوربة حارة وحامضة", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Sweetcorn & Chicken", nameAr: "شوربة ذرة بالدجاج", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "dim-sum",
    titleEn: "Dim Sum",
    titleAr: "ديم سم",
    dishes: [
      { nameEn: "Steamed Prawn Dumplings", nameAr: "دمبلينغ الروبيان المطبوخ بالبخار", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Truffle Siu Mai", nameAr: "سيو ماي بالكمأة", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Vegetable Crystal Dumplings", nameAr: "دمبلينغ الخضار الكريستالي", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "seafood",
    titleEn: "Seafood",
    titleAr: "المأكولات البحرية",
    dishes: [
      { nameEn: "Steamed Whole Sea Bass", nameAr: "سمك القاروص المطبوخ بالبخار", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Salt & Pepper Prawns", nameAr: "روبيان بالملح والفلفل", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "beef",
    titleEn: "Beef",
    titleAr: "اللحوم",
    dishes: [
      { nameEn: "Black Pepper Wagyu", nameAr: "واغيو بالفلفل الأسود", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Sichuan Beef", nameAr: "لحم بقر سيتشوان", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "chicken",
    titleEn: "Chicken",
    titleAr: "الدجاج",
    dishes: [
      { nameEn: "Kung Pao Chicken", nameAr: "دجاج كونغ باو", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Lemongrass Chicken", nameAr: "دجاج بعشب الليمون", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "vegetables",
    titleEn: "Vegetables",
    titleAr: "الخضروات",
    dishes: [
      { nameEn: "Wok-Fired Seasonal Greens", nameAr: "خضروات موسمية على الووك", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Mapo Tofu", nameAr: "توفو مابو", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "noodles-rice",
    titleEn: "Noodles & Rice",
    titleAr: "النودلز والأرز",
    dishes: [
      { nameEn: "Hand-Pulled Noodles", nameAr: "نودلز مسحوبة يدويًا", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Yangzhou Fried Rice", nameAr: "أرز يانغتشو المقلي", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "mocktails",
    titleEn: "Mocktails",
    titleAr: "الموكتيلز",
    dishes: [
      { nameEn: "Jade Garden", nameAr: "حديقة جايد", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Lychee & Rose", nameAr: "ليتشي ووردة", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
  {
    id: "drinks",
    titleEn: "Drinks",
    titleAr: "المشروبات",
    dishes: [
      { nameEn: "Jasmine Tea", nameAr: "شاي الياسمين", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
      { nameEn: "Fresh Juices", nameAr: "عصائر طازجة", descEn: "[Description to be confirmed]", descAr: "[الوصف قيد التأكيد]", price: "—" },
    ],
  },
];
