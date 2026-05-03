# BAG Website

A clean, hostable static website for your bag brand. No framework needed — just HTML, CSS, and JavaScript.

---

## 📁 Folder Structure

```
bag/
├── index.html          ← Page structure (rarely need to edit)
├── css/
│   └── style.css       ← Styling & colors
├── js/
│   ├── content.js      ← ✅ EDIT THIS: All text, images & links
│   └── app.js          ← Page logic (don't need to edit)
├── images/             ← Drop your images here
└── README.md           ← This file
```

---

## ✏️ How to Edit Content

**All your website text, images, and links live in one file:**

```
js/content.js
```

Open it and change anything — brand name, category names, descriptions, contact info, etc. The website updates automatically.

### Example: Change your brand name
```js
brand: {
  name: "My Brand",   // ← Change this
  ...
}
```

### Example: Change contact info
```js
contact: {
  email:   "you@yourbrand.com",
  phone:   "+91 XXXXX XXXXX",
  address: "Your City, India",
  instagram: "https://instagram.com/yourbrand",
  whatsapp:  "https://wa.me/91XXXXXXXXXX",
}
```

---

## 🖼️ How to Add Your Images

1. Put your image file inside the `images/` folder
   - Example: `images/hero.jpg`, `images/cat-totes.jpg`

2. Open `js/content.js` and set the image path:

```js
// Hero background image
hero: {
  backgroundImage: "images/hero.jpg",   // ← add your file name here
}

// Category images
categories: {
  items: [
    {
      name:  "Tote Bags",
      image: "images/cat-totes.jpg",    // ← add your file name here
      ...
    },
  ]
}

// About section image
about: {
  image: "images/about.jpg",            // ← add your file name here
}
```

> 💡 **Tip:** If an image is missing or path is wrong, the website automatically shows an emoji placeholder — so nothing breaks!

### Recommended image sizes
| Image | Size |
|-------|------|
| Hero background | 1920 × 1080 px |
| Category cards  |  800 × 600 px  |
| About section   |  900 × 675 px  |

---

## 🎨 How to Change Colors

Open `css/style.css` and edit the variables at the very top:

```css
:root {
  --cream:       #faf7f2;   /* Page background */
  --accent:      #c8976a;   /* Brand color (buttons, links) */
  --dark:        #1a1a1a;   /* Primary text */
  ...
}
```

---

## 🌐 How to Host (Free Options)

### Option 1 — GitHub Pages (Recommended, Free)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository (e.g. `bag-website`)
3. Upload all files (keep the folder structure)
4. Go to **Settings → Pages → Source → main branch**
5. Your site will be live at `https://yourusername.github.io/bag-website`

### Option 2 — Netlify (Free, easiest drag-and-drop)
1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag and drop your entire `bag/` folder onto the Netlify dashboard
3. Done! You get a live URL instantly

### Option 3 — Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and sign up free
2. Import your GitHub repository or drag and drop
3. Site goes live automatically

---

## 📋 Sections Checklist

| Section    | Editable in content.js |
|------------|------------------------|
| Hero       | ✅ Title, subtitle, buttons, background image |
| Categories | ✅ Names, descriptions, images, badges |
| Features   | ✅ Icons, titles, descriptions |
| About      | ✅ Text, image, stats, values |
| Contact    | ✅ Email, phone, address, social links |
| Footer     | ✅ Description, links |

---

## 🚀 Quick Start

Just open `index.html` in any browser to preview locally. No server needed.
