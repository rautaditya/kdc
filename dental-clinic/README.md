# 🦷 Yash Super Speciality Dental Clinic — Website

Premium dental clinic website built with **Next.js 14** + **Tailwind CSS**.

---

## 📁 Project Structure

```
dental-clinic/
├── components/
│   ├── Navbar.jsx        # Sticky responsive navbar with hamburger menu
│   ├── Hero.jsx          # Hero section with animated cards & stats
│   ├── Services.jsx      # 6 service cards with hover animations
│   ├── About.jsx         # Doctor profile & clinic highlights
│   ├── Testimonials.jsx  # Auto-sliding patient reviews
│   ├── Contact.jsx       # Appointment form + map + contact info
│   └── Footer.jsx        # Links, social icons, contact details
├── pages/
│   ├── _app.js           # App wrapper with global CSS
│   ├── _document.js      # HTML head with fonts & SEO meta
│   └── index.js          # Main page assembling all components
├── styles/
│   └── globals.css       # Custom CSS variables, animations, utilities
├── tailwind.config.js    # Tailwind theme (colors, fonts, animations)
├── postcss.config.js
└── package.json
```

---

## 🚀 Setup Instructions

### 1. Install dependencies
```bash
cd dental-clinic
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#2F80ED` (Blue) |
| Accent | `#FFC107` (Yellow) |
| Background | `#F9FBFD` |
| Text | `#1F2937` |
| Soft Blue | `#EAF4FB` |
| Font Display | Playfair Display |
| Font Body | DM Sans |

---

## ✨ Features

- ✅ **Fully Responsive** — Mobile, Tablet, Desktop
- ✅ **Sticky Navbar** — With hamburger menu on mobile
- ✅ **Smooth Animations** — Scroll reveal, float, shimmer
- ✅ **SEO Ready** — Meta tags, Open Graph
- ✅ **Appointment Form** — With success state animation
- ✅ **Auto Testimonials Slider** — With dot navigation
- ✅ **Floating Call Button** — Always accessible
- ✅ **Google Map Embed** — Clinic location
- ✅ **Performance Optimized** — Minimal dependencies

---

## 📞 Clinic Info

- **Doctors:** Dr. Ashwin Kodgi & Dr. Shruti A. Kodgi
- **Location:** 1st Floor, Vyapari Dharmshala Complex, Gandhi Chowk, Latur
- **Phone:** 8806333633
- **Hours:** Daily until 9:00 PM
