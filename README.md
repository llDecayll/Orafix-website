# OraFix Dental Care Website

An exact, modern, high-performance static website replication of **[OraFix Dental Care](https://orafixdentalcare.in/)** located in HBR Layout, Bangalore, built with pure **HTML5**, **Vanilla CSS3**, and **JavaScript**.

---

## 🌟 Overview & Highlights

- **Clinic Name:** OraFix Dental Care
- **Lead Dental Specialist:** Dr. Sheema M. (10+ Years Experience)
- **Clinic Location:** No. 789, 1st Stage, 3rd Block, Opp. Shabari Juice Center, HBR Layout, Bengaluru, Karnataka 560043
- **Contact / WhatsApp:** +91 73383 39481
- **Email:** admin@orafixdentalcare.in
- **Operating Hours:** Mon – Sat: 10:00 AM – 2:00 PM | 5:00 PM – 8:00 PM (Sunday Closed)

---

## 🚀 Features

- **100% Pure Semantic HTML5 & CSS3:** No bloated third-party page builders or heavy JavaScript frameworks. Ultra-fast loading speeds, optimized for Core Web Vitals.
- **Brand-Accurate Color Scheme:** Authentic OraFix Jade/Emerald `#3F9B6E`, Mint tints `#EAF5EF` / `#D0E6DB`, and Dark Slate/Navy `#151F6D`.
- **Complete Responsive Design:** Fluid layouts optimized for mobile, tablet, laptop, and 4K desktop screens.
- **Interactive UI Components:**
  - Sticky header with glassmorphism on scroll.
  - Mobile slide-out drawer menu with collapsible submenus.
  - Animated live patient & appointment statistics counter.
  - Interactive FAQ accordion with smooth CSS transitions.
  - Multi-slide patient testimonial carousel with auto-play and manual controls.
  - Interactive appointment booking form with instant confirmation modal dialog.
  - Interactive contact enquiry form.
  - Floating WhatsApp click-to-chat button & Back-to-top button.
- **Full SEO & Structured Data:** Semantic tags, OpenGraph social cards, Twitter cards, meta descriptions, and Schema.org `Dentist` JSON-LD on all pages.
- **Self-Contained Local Assets:** All 120+ images, doctor portraits, treatment illustrations, badges, and logos are locally stored in `assets/images/`.

---

## 📁 Directory Structure

```
Orafix/
├── index.html                                        # Homepage
├── about.html                                        # About Us & Clinic Philosophy
├── services.html                                     # Services Hub
├── cosmetic-dentistry.html                           # Cosmetic Dentistry
├── orthodontic.html                                  # Orthodontic Services (Braces & Aligners)
├── emergency-dental-services.html                    # Emergency Dental Services
├── oral-maxillofacial-procedures.html                # Oral & Maxillofacial Procedures
├── periodontal-gum-treatments.html                   # Periodontal (Gum) Treatments
├── pricing.html                                      # Affordable Dental Care Plans
├── appointment.html                                  # Online Appointment Booking Wizard
├── contact.html                                      # Contact Information, Hours & Map
├── blog.html                                         # Dental Blog & Health Guides Hub
├── 5-reasons-your-children-need-regular-dental-check-up.html # Blog Post 1
├── what-you-need-to-know-about-wisdom-teeth.html             # Blog Post 2
├── everything-you-want-to-know-about-cosmetic-dentistry.html # Blog Post 3
├── everything-you-need-to-know-about-a-dead-tooth.html       # Blog Post 4
├── privacy-policy.html                               # Privacy Policy
├── terms-conditions.html                             # Terms & Conditions
├── css/
│   └── style.css                                     # Master Design System & Styles
├── js/
│   └── main.js                                       # Interactive Logic & Sliders
├── assets/
│   └── images/                                       # All Logos, Photos & Icons
├── .gitignore
└── README.md
```

---

## 💻 Local Preview & Development

You can open any `.html` file directly in your browser, or run a local web server:

### Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Using Node / npx:
```bash
npx serve .
```

---

## 📤 Push to GitHub

To push this repository to your GitHub account:

1. Create a new repository on GitHub (e.g., `orafix-dental-website`).
2. Add your GitHub remote and push:
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```
