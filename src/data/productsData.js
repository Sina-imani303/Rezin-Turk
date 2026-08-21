export const products = [
  {
    id: "tinner-fori",
    name: "تینر فوری",
    category: "تینر",
    image: "/product/product1.png",
    description: "تینر فوری مناسب برای مصارف صنعتی و رنگ‌کاری با کیفیت مناسب و قدرت حلالیت بالا.",

    variants: [
      {
        id: "10000",
        name: "۱۰ هزار",

        packages: [
          {
            id: "liter",
            name: "لیتری",
            type: "لیتری",
            unit: "بطری",

            quantityPerPackage: 12,

            unitPrice: 150000,

            originalPrice: 180000,

            price: 150000,

            discountPercent: 17,
          },
        ],
      },

      {
        id: "20000",
        name: "۲۰ هزار",

        packages: [
          {
            id: "liter",
            name: "لیتری",
            type: "لیتری",
            unit: "بطری",

            quantityPerPackage: 12,

            unitPrice: 200000,
            originalPrice: 240000,
            price: 200000,
            discountPercent: 17,
          },
        ],
      },
    ],
  },

  {
    id: "tinner-roghani",
    name: "تینر روغنی",
    category: "تینر",
    image: "/product/product2.png",
    description: "تینر روغنی مناسب برای رنگ‌های روغنی و مصارف صنعتی با کیفیت مناسب.",

    variants: [
      {
        id: "2000",
        name: "۲ هزار",

        packages: [
          {
            id: "liter",
            name: "لیتری",
            type: "لیتری",
            unit: "بطری",

            quantityPerPackage: 12,

            unitPrice: 130000,
            originalPrice: 155000,
            price: 130000,
            discountPercent: 16,
          },
        ],
      },

      {
        id: "second",
        name: "مدل دوم",

        packages: [
          {
            id: "liter",
            name: "لیتری",
            type: "لیتری",
            unit: "بطری",

            quantityPerPackage: 12,

            unitPrice: 170000,
            originalPrice: 200000,
            price: 170000,
            discountPercent: 15,
          },
        ],
      },
    ],
  },

  {
    id: "dish-killer-33",
    name: "جوهر نمک دیس‌کیلر ۳۳٪",
    category: "اسید",
    image: "/product/product3.png",
    description: "جوهر نمک دیس‌کیلر ۳۳ درصد مناسب برای مصارف صنعتی.",

    variants: [
      {
        id: "default",
        name: "۳۳ درصد",

        packages: [
          {
            id: "can",
            name: "حلب",
            type: "حلب",
            unit: "حلب",

            quantityPerPackage: 1,

            unitPrice: 450000,
            originalPrice: 500000,
            price: 450000,
            discountPercent: 10,
          },
        ],
      },
    ],
  },
];
