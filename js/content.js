// ============================================================
//  CONTENT.JS — Edit everything here!
//  Controls ALL text, images, products, and links.
// ============================================================

const SITE = {

  brand: {
    name:            "BAG",
    logo:            "images/home/Logo.JPG.jpeg", // Your brand logo
    pageTitle:       "BAG | Premium Bags & Accessories",
    metaDescription: "Premium bags and accessories for every occasion.",
  },

  hero: {
    eyebrow:         "New Collection 2026",
    title:           "Carry Your Story",
    subtitle:        "Thoughtfully crafted bags for the modern world — where style meets purpose.",
    ctaPrimary:      { text: "Shop Now",   link: "#products" },
    ctaSecondary:    { text: "Our Story",   link: "#about"   },
    backgroundImage: "images/hero/hero-bg.jpg",
  },

  /* CATEGORIES SECTION — commented out for now, uncomment when you have more products
  categories: {
    sectionTag:   "Collections",
    sectionTitle: "Shop by Category",
    items: [ ... ]
  },
  */

  // ----------------------------------------------------------
  // HOME PRODUCTS — shown directly on homepage
  // Add your own images to: images/home/
  // Replace dummy images with your real product photos.
  // ----------------------------------------------------------
  homeProducts: {
    sectionTag:   "Our Products",
    sectionTitle: "Shop Our Collection",
    sectionDesc:  "Handpicked pieces crafted for style, quality, and everyday life.",

    items: [
      {
        id:           "hp1",
        name:         "Classic Leather Tote",
        price:        "₹2,499",
        originalPrice:"₹3,999",   // leave empty "" for no strikethrough
        badge:        "Sale",      // "New" / "Sale" / "Bestseller" / ""
        image:        "images/home/product-1.jpg",  // ← replace with your photo
        description:  "Full-grain leather, suede lining. Fits a 15\" laptop.",
      },
      {
        id:           "hp2",
        name:         "Mini Flap Bag",
        price:        "₹1,499",
        originalPrice:"",
        badge:        "New",
        image:        "images/home/product-2.jpg",
        description:  "Structured mini with a front flap and gold clasp.",
      },
      {
        id:           "hp3",
        name:         "Canvas Trail Backpack",
        price:        "₹2,299",
        originalPrice:"₹3,000",
        badge:        "Sale",
        image:        "images/home/product-3.jpg",
        description:  "Water-resistant canvas, ergonomic back panel.",
      },
      {
        id:           "hp4",
        name:         "Leather Saddle Crossbody",
        price:        "₹2,199",
        originalPrice:"",
        badge:        "",
        image:        "images/home/product-4.jpg",
        description:  "Curved saddle silhouette with adjustable strap.",
      },
      {
        id:           "hp5",
        name:         "Velvet Evening Clutch",
        price:        "₹1,799",
        originalPrice:"₹2,500",
        badge:        "Sale",
        image:        "images/home/product-5.jpg",
        description:  "Rich velvet in deep jewel tones. Fits phone, cards & lipstick.",
      },
      {
        id:           "hp6",
        name:         "Weekender Duffel",
        price:        "₹4,499",
        originalPrice:"",
        badge:        "Bestseller",
        image:        "images/home/product-6.jpg",
        description:  "45L capacity, full-length zip, shoulder strap included.",
      },
      {
        id:           "hp7",
        name:         "Special Edition Bag 1",
        price:        "₹3,499",
        originalPrice:"",
        badge:        "New",
        image:        "images/home/IMG_0827.PNG",
        description:  "Elegant new arrival perfectly styled for any occasion.",
      },
      {
        id:           "hp8",
        name:         "Special Edition Bag 2",
        price:        "₹2,999",
        originalPrice:"",
        badge:        "New",
        image:        "images/home/IMG_0829.PNG",
        description:  "A beautiful contemporary piece to complete your look.",
      },
    ],
  },

  // ----------------------------------------------------------
  // FEATURES STRIP
  // ----------------------------------------------------------
  features: [
    { icon:"🏆", title:"Premium Quality",  description:"Every bag is crafted from carefully sourced materials built to last." },
    { icon:"🚚", title:"Free Shipping",    description:"Complimentary delivery on all orders above ₹999. Pan India." },
    { icon:"🔄", title:"Easy Returns",     description:"Not in love? Return within 30 days — no questions asked." },
    { icon:"💬", title:"24/7 Support",     description:"Our team is always here to help you find your perfect bag." },
  ],

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    sectionTag:  "Our Story",
    title:       "Crafted with Passion",
    paragraphs: [
      "At <strong>BAG</strong>, we believe a great bag is more than an accessory — it's a companion for life's most important moments.",
      "Founded in 2018 with a single dream: to make premium, thoughtfully designed bags accessible to everyone.",
      "We're a small, passionate team that genuinely cares about what we make — and who we make it for.",
    ],
    image:  "images/about/about.jpg",
    stats: [
      { value:"Since 2018", label:"Trusted by thousands" },
      { value:"100%",       label:"Authentic Materials"  },
      { value:"50,000+",    label:"Happy Customers"      },
    ],
    values:  ["♻️ Sustainable", "🤝 Ethically Made", "🇮🇳 Made in India"],
    ctaText: "Get in Touch",
    ctaLink: "#contact",
  },

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    sectionTag:   "Contact Us",
    sectionTitle: "Let's Talk",
    sectionDesc:  "Have a question? We'd love to hear from you. Send us a message and we'll get back within 24 hours.",
    email:        "hello@bagstore.in",
    phone:        "+91 98765 43210",
    address:      "Mumbai, Maharashtra, India",
    instagram:    "#",
    whatsapp:     "#",
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    description:   "Premium bags crafted for the modern world. Quality you can feel, style you can wear.",
    copyrightYear: "2026",
    quickLinks: [
      { text:"Products",  link:"#products" },
      { text:"About Us",  link:"#about"    },
      { text:"Contact",   link:"#contact"  },
    ],
    supportLinks: [
      { text:"FAQs",          link:"#contact" },
      { text:"Shipping Info", link:"#contact" },
      { text:"Returns",       link:"#contact" },
      { text:"Track Order",   link:"#contact" },
    ],
  },

};
