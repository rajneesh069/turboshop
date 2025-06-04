interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  imgURLs: string[];
  description: string;
  category: string;
  brand?: string;
  stock: number;
  isNew: boolean;
  hasDiscount?: boolean;
  discountPercentage?: number;
  colorsAvailable?: string[];
  sizesAvailable?: string[];
  shippingInfo?: string;
  returnPolicy?: string;
  tags?: string[];
}

const products: Product[] = [
  {
    id: "prod_001",
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    currency: "USD",
    rating: 4.7,
    reviewsCount: 1250,
    imgURLs: [
      "https://placehold.co/600x400/E2E8F0/4A5568?text=Headphones+Img+1",
      "https://placehold.co/600x400/CBD5E0/2D3748?text=Headphones+Img+2",
      "https://placehold.co/600x400/A0AEC0/1A202C?text=Headphones+Img+3",
    ],
    description:
      "Immerse yourself in sound with these premium over-ear headphones featuring active noise cancellation and long battery life.",
    category: "Electronics",
    brand: "AudioPhonic",
    stock: 75,
    isNew: true,
    hasDiscount: true,
    discountPercentage: 15,
    colorsAvailable: ["Black", "Silver", "Midnight Blue"],
    shippingInfo: "Free 2-day shipping",
    returnPolicy: "30-day free returns",
    tags: ["audio", "headphones", "wireless", "noise-cancelling", "tech"],
  },
  {
    id: "prod_002",
    name: "Organic Cotton T-Shirt",
    price: 29.5,
    currency: "USD",
    rating: 4.5,
    reviewsCount: 850,
    imgURLs: ["https://placehold.co/600x400/E6FFFA/2C7A7B?text=T-Shirt+Img+1"],
    description:
      "Soft and breathable t-shirt made from 100% organic cotton. Perfect for everyday wear.",
    category: "Apparel",
    brand: "EcoThreads",
    stock: 200,
    isNew: false,
    hasDiscount: false,
    colorsAvailable: ["White", "Navy", "Forest Green", "Heather Grey"],
    sizesAvailable: ["S", "M", "L", "XL", "XXL"],
    shippingInfo: "Standard shipping (3-5 days)",
    returnPolicy: "30-day returns",
    tags: ["clothing", "t-shirt", "organic", "cotton", "casual"],
  },
  {
    id: "prod_003",
    name: "Smart Coffee Maker",
    price: 89.0,
    currency: "USD",
    rating: 4.2,
    reviewsCount: 430,
    imgURLs: [
      "https://placehold.co/600x400/FFF5F7/9F7AEA?text=Coffee+Maker+Img+1",
    ],
    description:
      "Brew the perfect cup of coffee with this smart coffee maker. Control it from your phone!",
    category: "Home Appliances",
    brand: "BrewMaster",
    stock: 40,
    isNew: true,
    colorsAvailable: ["Stainless Steel", "Black"],
    shippingInfo: "Ships in 24 hours",
    returnPolicy: "60-day warranty",
    tags: ["kitchen", "coffee", "smart home", "appliance"],
  },
  {
    id: "prod_004",
    name: "Yoga Mat - Eco Friendly",
    price: 45.0,
    currency: "USD",
    rating: 4.9,
    reviewsCount: 980,
    imgURLs: ["https://placehold.co/600x400/F0FFF4/38A169?text=Yoga+Mat+Img+1"],
    description:
      "High-density, non-slip yoga mat made from eco-friendly materials. Excellent grip and cushioning.",
    category: "Sports & Outdoors",
    brand: "ZenFlow",
    stock: 120,
    isNew: false,
    hasDiscount: true,
    discountPercentage: 10,
    colorsAvailable: ["Teal", "Lavender", "Charcoal"],
    shippingInfo: "Free standard shipping",
    returnPolicy: "30-day returns",
    tags: ["fitness", "yoga", "exercise", "eco-friendly", "mat"],
  },
  {
    id: "prod_005",
    name: "Leather Messenger Bag",
    price: 120.75,
    currency: "USD",
    rating: 4.6,
    reviewsCount: 320,
    imgURLs: [
      "https://placehold.co/600x400/FAF089/B7791F?text=Messenger+Bag+Img+1",
    ],
    description:
      "Stylish and durable messenger bag crafted from genuine leather. Perfect for work or travel.",
    category: "Accessories",
    brand: "UrbanCarry",
    stock: 55,
    isNew: false,
    colorsAvailable: ["Brown", "Black"],
    shippingInfo: "Ships worldwide",
    returnPolicy: "45-day returns",
    tags: ["bag", "leather", "fashion", "accessory", "work"],
  },
  {
    id: "prod_006",
    name: "Bluetooth Speaker - Waterproof",
    price: 59.99,
    currency: "USD",
    rating: 4.4,
    reviewsCount: 710,
    imgURLs: [
      "https://placehold.co/600x400/D6BCFA/805AD5?text=Speaker+Img+1",
      "https://placehold.co/600x400/BEE3F8/3182CE?text=Speaker+Img+2",
    ],
    description:
      "Portable and waterproof Bluetooth speaker with rich sound. Take your music anywhere.",
    category: "Electronics",
    brand: "SoundWave",
    stock: 90,
    isNew: true,
    colorsAvailable: ["Blue", "Red", "Black", "Green"],
    shippingInfo: "Free 3-day shipping",
    returnPolicy: "30-day free returns",
    tags: ["audio", "speaker", "bluetooth", "waterproof", "portable"],
  },
  {
    id: "prod_007",
    name: "Stainless Steel Water Bottle",
    price: 22.0,
    currency: "USD",
    rating: 4.8,
    reviewsCount: 1500,
    imgURLs: [
      "https://placehold.co/600x400/9AE6B4/276749?text=Water+Bottle+Img+1",
    ],
    description:
      "Double-walled insulated water bottle. Keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "Home Goods",
    brand: "HydratePro",
    stock: 300,
    isNew: false,
    hasDiscount: false,
    colorsAvailable: ["Silver", "Matte Black", "Ocean Blue", "Rose Gold"],
    sizesAvailable: ["17oz", "25oz", "32oz"],
    shippingInfo: "Standard shipping",
    returnPolicy: "No returns on used items",
    tags: ["kitchen", "drinkware", "reusable", "eco-friendly", "bottle"],
  },
  {
    id: "prod_008",
    name: "Running Shoes - Lightweight",
    price: 110.0,
    currency: "USD",
    rating: 4.3,
    reviewsCount: 650,
    imgURLs: [
      "https://placehold.co/600x400/FED7D7/C53030?text=Running+Shoes+Img+1",
    ],
    description:
      "Lightweight and breathable running shoes designed for speed and comfort on any terrain.",
    category: "Footwear",
    brand: "QuickStride",
    stock: 80,
    isNew: true,
    hasDiscount: true,
    discountPercentage: 5,
    colorsAvailable: ["Neon Yellow", "Black/White", "Electric Blue"],
    sizesAvailable: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    shippingInfo: "Free shipping",
    returnPolicy: "30-day returns, unworn",
    tags: ["shoes", "running", "sports", "athletic", "footwear"],
  },
  {
    id: "prod_009",
    name: "Hardcover Novel - Bestseller",
    price: 18.99,
    currency: "USD",
    rating: 4.9,
    reviewsCount: 2200,
    imgURLs: ["https://placehold.co/600x400/FEEBC8/DD6B20?text=Book+Img+1"],
    description:
      "The latest bestselling novel from acclaimed author. A thrilling page-turner.",
    category: "Books",
    brand: "PageTurn Publishing",
    stock: 150,
    isNew: false,
    shippingInfo: "Media mail shipping",
    returnPolicy: "14-day returns if unread",
    tags: ["book", "novel", "fiction", "bestseller", "reading"],
  },
  {
    id: "prod_010",
    name: "Desk Lamp with USB Charging Port",
    price: 35.5,
    currency: "USD",
    rating: 4.1,
    reviewsCount: 390,
    imgURLs: [
      "https://placehold.co/600x400/F7FAFC/718096?text=Desk+Lamp+Img+1",
    ],
    description:
      "Modern LED desk lamp with adjustable brightness and a convenient USB charging port for your devices.",
    category: "Office Supplies",
    brand: "BrightIdea",
    stock: 60,
    isNew: false,
    hasDiscount: false,
    colorsAvailable: ["White", "Black"],
    shippingInfo: "Standard shipping",
    returnPolicy: "30-day returns",
    tags: ["office", "lighting", "lamp", "desk", "usb"],
  },
];
