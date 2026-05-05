// ╔══════════════════════════════════════════════════════════════╗
// ║           STONELIGHT — SITE CONTENT CONFIGURATION           ║
// ║  Edit ONLY this file to update text, images, and products.  ║
// ║  Do NOT touch app.js, category.js, or HTML files directly.  ║
// ╚══════════════════════════════════════════════════════════════╝

const SITE = {

  // ────────────────────────────────────────────────────────────
  // 1. BRAND
  //    Change your brand name, logo file, and SEO details here.
  // ────────────────────────────────────────────────────────────
  brand: {
    name:            "StoneLight",
    logo:            "images/home/Logo.JPG.jpeg",   // Path to your logo file
    pageTitle:       "StoneLight | Premium Bags & Accessories",
    metaDescription: "Premium bags and accessories for every occasion.",
  },


  // ────────────────────────────────────────────────────────────
  // 2. HERO (Top Banner)
  //    Change the headline, subtext, button labels, and the
  //    large background image shown at the top of the homepage.
  // ────────────────────────────────────────────────────────────
  hero: {
    eyebrow:         "New Collection 2026",           // Small label above the title
    title:           "Carry Your Story",              // Main headline
    subtitle:        "Thoughtfully crafted bags for the modern world — where style meets purpose.",
    ctaPrimary:      { text: "Shop Now",  link: "#categories" },  // First button
    ctaSecondary:    { text: "Our Story", link: "#about" },        // Second button
    backgroundImage: "images/hero/background.PNG",    // Hero background photo
  },


  // ────────────────────────────────────────────────────────────
  // 3. CATEGORIES + PRODUCTS
  //
  //    Each category has:
  //      id          — unique code (do not change once set)
  //      name        — displayed name on the card
  //      image       — category card image (images/categories/)
  //      description — short description shown on the category page
  //      products    — list of products (see template below)
  //
  //    ┌─ HOW TO ADD A NEW PRODUCT ──────────────────────────────┐
  //    │  Copy this block and paste inside the products: [ ]     │
  //    │  of the right category:                                 │
  //    │                                                         │
  //    │  {                                                       │
  //    │    id:            "xx1",          // unique ID          │
  //    │    name:          "Product Name",                       │
  //    │    price:         "₹1,999",                             │
  //    │    originalPrice: "₹2,999",       // "" = no strikethrough│
  //    │    badge:         "New",          // New/Sale/Bestseller/""│
  //    │    image:         "images/products/CATEGORY/prod-X.jpg",│
  //    │    description:   "Short product description.",         │
  //    │  },                                                      │
  //    └─────────────────────────────────────────────────────────┘
  // ────────────────────────────────────────────────────────────
  categories: {
    sectionTag:   "Collections",
    sectionTitle: "Shop by Category",
    items: [

      // ── CATEGORY 1: Trolley Suitcase ──────────────────────────
      {
        id:          "c1",
        name:        "Trolley Suitcase",
        image:       "images/categories/cat-trolley-suitcase.jpg",
        description: "Premium hardshell & softshell trolley suitcases built for every journey.",
        products: [
          {
            id:            "ts1",
            name:          "20\" Cabin Trolley",
            price:         "₹3,499",
            originalPrice: "₹5,999",
            badge:         "Sale",
            image:         "images/products/trolley-suitcase/prod-1.jpg",
            description:   "Lightweight hardshell, TSA lock, 360° spinner wheels.",
          },
          {
            id:            "ts2",
            name:          "24\" Check-in Trolley",
            price:         "₹4,999",
            originalPrice: "",
            badge:         "Bestseller",
            image:         "images/products/trolley-suitcase/prod-2.jpg",
            description:   "Spacious check-in suitcase with expandable zip.",
          },
          {
            id:            "ts3",
            name:          "28\" Large Trolley",
            price:         "₹5,999",
            originalPrice: "₹7,999",
            badge:         "Sale",
            image:         "images/products/trolley-suitcase/prod-3.jpg",
            description:   "Maximum capacity for long trips.",
          },
          // ← ADD MORE TROLLEY SUITCASE PRODUCTS HERE
        ],
      },

      // ── CATEGORY 2: Trolley Duffle Bag ────────────────────────
      {
        id:          "c2",
        name:        "Trolley Duffle Bag",
        image:       "images/categories/cat-duffle.jpg",
        description: "Spacious trolley duffle bags — perfect for weekend getaways.",
        products: [
          {
            id:            "td1",
            name:          "Rolling Duffle 40L",
            price:         "₹3,199",
            originalPrice: "",
            badge:         "New",
            image:         "images/products/trolley-duffle/prod-1.jpg",
            description:   "Rugged canvas with retractable trolley handle.",
          },
          {
            id:            "td2",
            name:          "Sport Trolley Duffle",
            price:         "₹2,799",
            originalPrice: "₹3,999",
            badge:         "Sale",
            image:         "images/products/trolley-duffle/prod-2.jpg",
            description:   "Water-resistant, breathable mesh pockets.",
          },
          {
            id:            "td3",
            name:          "Weekend Roller Bag",
            price:         "₹3,499",
            originalPrice: "",
            badge:         "Bestseller",
            image:         "images/products/trolley-duffle/prod-3.jpg",
            description:   "Fits carry-on requirements on most airlines.",
          },
          // ← ADD MORE TROLLEY DUFFLE PRODUCTS HERE
        ],
      },

      // ── CATEGORY 3: Laptop Bag ────────────────────────────────
      {
        id:          "c3",
        name:        "Laptop Bag",
        image:       "images/categories/cat-laptop.jpg",
        description: "Sleek, padded laptop bags designed for the modern professional.",
        products: [
          {
            id:            "lb1",
            name:          "Slim 15\" Laptop Bag",
            price:         "₹1,799",
            originalPrice: "₹2,499",
            badge:         "Sale",
            image:         "images/products/laptop-bag/prod-1.jpg",
            description:   "Padded sleeve for 15\" laptops, card slots & charger pocket.",
          },
          {
            id:            "lb2",
            name:          "Executive Laptop Briefcase",
            price:         "₹2,499",
            originalPrice: "",
            badge:         "New",
            image:         "images/products/laptop-bag/prod-2.jpg",
            description:   "Professional look with separate document compartment.",
          },
          {
            id:            "lb3",
            name:          "Convertible Laptop Bag",
            price:         "₹2,199",
            originalPrice: "",
            badge:         "",
            image:         "images/products/laptop-bag/prod-3.jpg",
            description:   "Carry as a tote or backpack — versatile everyday use.",
          },
          // ← ADD MORE LAPTOP BAG PRODUCTS HERE
        ],
      },

      // ── CATEGORY 4: Rucksack Backpack ─────────────────────────
      {
        id:          "c4",
        name:        "Rucksack Backpack",
        image:       "images/categories/cat-rucksack.jpg",
        description: "Durable rucksack backpacks for travel, trekking, and everyday use.",
        products: [
          {
            id:            "rb1",
            name:          "30L Trekking Rucksack",
            price:         "₹2,299",
            originalPrice: "₹3,200",
            badge:         "Sale",
            image:         "images/products/rucksack/prod-1.jpg",
            description:   "Rain cover included, padded hip belt & shoulder straps.",
          },
          {
            id:            "rb2",
            name:          "Urban Rucksack 25L",
            price:         "₹1,999",
            originalPrice: "",
            badge:         "Bestseller",
            image:         "images/products/rucksack/prod-2.jpg",
            description:   "Casual daily use with laptop sleeve and USB port.",
          },
          {
            id:            "rb3",
            name:          "Vintage Canvas Rucksack",
            price:         "₹1,799",
            originalPrice: "₹2,499",
            badge:         "Sale",
            image:         "images/products/rucksack/prod-3.jpg",
            description:   "Waxed canvas, leather accents, retro style.",
          },
          // ← ADD MORE RUCKSACK PRODUCTS HERE
        ],
      },

      // ── CATEGORY 5: School Bag ────────────────────────────────
      {
        id:          "c5",
        name:        "School Bag",
        image:       "images/categories/cat-school.jpg",
        description: "Comfortable, fun and sturdy school bags kids will love.",
        products: [
          {
            id:            "sb1",
            name:          "Kids Ergonomic School Bag",
            price:         "₹999",
            originalPrice: "₹1,499",
            badge:         "Sale",
            image:         "images/products/school-bag/prod-1.jpg",
            description:   "Spine-friendly back panel, reflective strip for safety.",
          },
          {
            id:            "sb2",
            name:          "Primary School Backpack",
            price:         "₹799",
            originalPrice: "",
            badge:         "New",
            image:         "images/products/school-bag/prod-2.jpg",
            description:   "Lightweight, waterproof, fun prints.",
          },
          {
            id:            "sb3",
            name:          "Teen School Bag 30L",
            price:         "₹1,299",
            originalPrice: "₹1,799",
            badge:         "Sale",
            image:         "images/products/school-bag/prod-3.jpg",
            description:   "Large main compartment + laptop sleeve for teens.",
          },
          // ← ADD MORE SCHOOL BAG PRODUCTS HERE
        ],
      },

      // ── CATEGORY 6: Air Bag ───────────────────────────────────
      {
        id:          "c6",
        name:        "Air Bag",
        image:       "images/categories/cat-airbag.jpg",
        description: "Lightweight, cabin-friendly air bags for hassle-free flying.",
        products: [
          {
            id:            "ab1",
            name:          "Cabin Air Bag 20L",
            price:         "₹1,999",
            originalPrice: "₹2,999",
            badge:         "Sale",
            image:         "images/products/air-bag/prod-1.jpg",
            description:   "Meets most airline cabin size requirements.",
          },
          {
            id:            "ab2",
            name:          "Foldable Air Tote",
            price:         "₹1,299",
            originalPrice: "",
            badge:         "New",
            image:         "images/products/air-bag/prod-2.jpg",
            description:   "Packs flat, pops open to 25L — perfect for overheads.",
          },
          {
            id:            "ab3",
            name:          "Premium Flight Bag",
            price:         "₹2,499",
            originalPrice: "",
            badge:         "Bestseller",
            image:         "images/products/air-bag/prod-3.jpg",
            description:   "Trolley sleeve, RFID pocket, TSA-friendly design.",
          },
          // ← ADD MORE AIR BAG PRODUCTS HERE
        ],
      },

      // ── CATEGORY 7: File Bag ──────────────────────────────────
      {
        id:          "c7",
        name:        "File Bag",
        image:       "images/categories/cat-file.jpg",
        description: "Smart organised file bags for documents and office essentials.",
        products: [
          {
            id:            "fb1",
            name:          "A4 Document File Bag",
            price:         "₹699",
            originalPrice: "₹999",
            badge:         "Sale",
            image:         "images/products/file-bag/prod-1.jpg",
            description:   "Holds A4 documents, pens, and stationery neatly.",
          },
          {
            id:            "fb2",
            name:          "Slim Executive File Bag",
            price:         "₹999",
            originalPrice: "",
            badge:         "New",
            image:         "images/products/file-bag/prod-2.jpg",
            description:   "Professional PU leather with multiple sections.",
          },
          {
            id:            "fb3",
            name:          "Multi-Pocket File Bag",
            price:         "₹849",
            originalPrice: "₹1,199",
            badge:         "Sale",
            image:         "images/products/file-bag/prod-3.jpg",
            description:   "Expandable, fits tablets and office docs.",
          },
          // ← ADD MORE FILE BAG PRODUCTS HERE
        ],
      },

      // ── CATEGORY 8: Travel Accessories ───────────────────────
      {
        id:          "c8",
        name:        "Travel Accessories",
        image:       "images/categories/cat-travel-accs.jpg",
        description: "Essential travel accessories — tags, organisers, pouches & more.",
        products: [
          {
            id:            "ta1",
            name:          "Travel Packing Cubes Set",
            price:         "₹799",
            originalPrice: "₹1,299",
            badge:         "Sale",
            image:         "images/products/travel-accessories/prod-1.jpg",
            description:   "Set of 4 cubes — keep your suitcase perfectly organised.",
          },
          {
            id:            "ta2",
            name:          "Passport & Card Organiser",
            price:         "₹499",
            originalPrice: "",
            badge:         "Bestseller",
            image:         "images/products/travel-accessories/prod-2.jpg",
            description:   "RFID blocking, holds passport, cards and tickets.",
          },
          {
            id:            "ta3",
            name:          "Hanging Toiletry Pouch",
            price:         "₹599",
            originalPrice: "₹899",
            badge:         "Sale",
            image:         "images/products/travel-accessories/prod-3.jpg",
            description:   "Waterproof lining, hooks on bathroom door.",
          },
          // ← ADD MORE TRAVEL ACCESSORIES HERE
        ],
      },

    ], // end categories items
  },   // end categories


  // ────────────────────────────────────────────────────────────
  // 4. HOMEPAGE FEATURED PRODUCTS  (currently hidden)
  //    To show this section on the homepage, go to index.html
  //    and remove the <div style="display:none;"> wrapper.
  // ────────────────────────────────────────────────────────────
  homeProducts: {
    sectionTag:  "Our Products",
    sectionTitle: "Shop Our Collection",
    sectionDesc:  "Handpicked pieces crafted for style, quality, and everyday life.",
    items: [
      { id: "hp1", name: "Classic Leather Tote",      price: "₹2,499", originalPrice: "₹3,999", badge: "Sale",       image: "images/home/product-1.jpg",   description: "Full-grain leather, suede lining. Fits a 15\" laptop." },
      { id: "hp2", name: "Mini Flap Bag",              price: "₹1,499", originalPrice: "",        badge: "New",        image: "images/home/product-2.jpg",   description: "Structured mini with a front flap and gold clasp." },
      { id: "hp3", name: "Canvas Trail Backpack",      price: "₹2,299", originalPrice: "₹3,000", badge: "Sale",       image: "images/home/product-3.jpg",   description: "Water-resistant canvas, ergonomic back panel." },
      { id: "hp4", name: "Leather Saddle Crossbody",   price: "₹2,199", originalPrice: "",        badge: "",           image: "images/home/product-4.jpg",   description: "Curved saddle silhouette with adjustable strap." },
      { id: "hp5", name: "Velvet Evening Clutch",      price: "₹1,799", originalPrice: "₹2,500", badge: "Sale",       image: "images/home/product-5.jpg",   description: "Rich velvet in deep jewel tones." },
      { id: "hp6", name: "Weekender Duffel",           price: "₹4,499", originalPrice: "",        badge: "Bestseller", image: "images/home/product-6.jpg",   description: "45L capacity, full-length zip, shoulder strap." },
      { id: "hp7", name: "Special Edition Bag 1",      price: "₹3,499", originalPrice: "",        badge: "New",        image: "images/home/IMG_0827.PNG",    description: "Elegant new arrival perfectly styled for any occasion." },
      { id: "hp8", name: "Special Edition Bag 2",      price: "₹2,999", originalPrice: "",        badge: "New",        image: "images/home/IMG_0829.PNG",    description: "A beautiful contemporary piece to complete your look." },
    ],
  },


  // ────────────────────────────────────────────────────────────
  // 5. FEATURES STRIP
  //    4 icons shown below the categories section.
  //    Use any emoji as the icon.
  // ────────────────────────────────────────────────────────────
  features: [
    { icon: "🏆", title: "Premium Quality",  description: "Every bag is crafted from carefully sourced materials built to last." },
    { icon: "💬", title: "24/7 Support",     description: "Our team is always here to help you find your perfect bag." },
  ],


  // ────────────────────────────────────────────────────────────
  // 6. ABOUT SECTION
  //    Update your brand story, stats, values, and photo here.
  // ────────────────────────────────────────────────────────────
  about: {
    sectionTag: "Our Story",
    title:      "Crafted with Passion",
    paragraphs: [
      "At <strong>StoneLight</strong>, we believe a great bag is more than an accessory — it's a companion for life's most important moments.",
      "Founded in 2026 with a single dream: to make premium, thoughtfully designed bags accessible to everyone.",
      "We're a small, passionate team that genuinely cares about what we make — and who we make it for.",
    ],
    image: "images/about/IMG_0760 (2).PNG",   // Your about section photo
    stats: [
      { value: "Since 2026", label: "Trusted by thousands" },
      { value: "100%",       label: "Authentic Materials" },
      { value: "50,000+",    label: "Happy Customers" },
    ],
    values:  ["♻️ Sustainable", "🤝 Ethically Made", "🇮🇳 Made in India"],
    ctaText: "Get in Touch",
    ctaLink: "#contact",
  },


  // ────────────────────────────────────────────────────────────
  // 7. CONTACT DETAILS
  //    Update your email, phone, address and social links.
  //    WhatsApp: replace the number (917906634074 = +91 7906634074)
  //    Instagram: replace with your actual Instagram profile URL
  // ────────────────────────────────────────────────────────────
  contact: {
    sectionTag:  "Contact Us",
    sectionTitle: "Let's Talk",
    sectionDesc:  "Have a question? We'd love to hear from you. Send us a message and we'll get back within 24 hours.",
    email:     "Stonelight144@gmail.com",
    phone:     "+91 7906634074",
    address:   "Sunil Enterprise, Naurangabad chuaraha, Etawah, India",
    whatsapp:  "https://wa.me/917906634074?text=Hi%20StoneLight%2C%20I%20have%20a%20query%20about%20your%20products.",
    instagram: "https://www.instagram.com/sunil_enterprises_etawah",   // ← Replace with your real Instagram URL
  },


  // ────────────────────────────────────────────────────────────
  // 8. FOOTER
  //    Update links and copyright year here.
  // ────────────────────────────────────────────────────────────
  footer: {
    description:  "Premium bags crafted for the modern world. Quality you can feel, style you can wear.",
    copyrightYear: "2026",
    quickLinks: [
      { text: "Products",  link: "#categories" },
      { text: "About Us",  link: "#about" },
      { text: "Contact",   link: "#contact" },
    ],
    supportLinks: [
      { text: "FAQs",          link: "#contact" },
      { text: "Shipping Info", link: "#contact" },
      { text: "Returns",       link: "#contact" },
      { text: "Track Order",   link: "#contact" },
    ],
  },

}; // end SITE
