# Vidhi Patel — Portfolio

A modern, responsive personal portfolio built with React and Tailwind CSS, showcasing my projects, skills, education, and experience as a Computer Engineering student and full-stack developer.

🔗 **Live Site:** [vidhipatel-portfolio.vercel.app](https://vidhipatel-portfolio.vercel.app)

---

## ✨ Features

- **Responsive design** — works seamlessly across mobile, tablet, and desktop
- **Dark / Light mode** with persisted theme preference (`localStorage`)
- **Animated hero section** with a typing effect cycling through roles
- **Scroll-based navigation** with active section highlighting
- **Skills section** with categorized tech stacks and interactive icon chips
- **Projects section**
  - Featured projects with autoplay preview videos/screenshots
  - Expandable "Mini Projects" card listing smaller practice builds with individual GitHub links
- **Education timeline** with a vertical connector and alternating layout
- **Contact form**
  - Real email delivery via [EmailJS](https://www.emailjs.com/)
  - Client-side validation with on-blur and on-submit checks
  - Accessible error states (`aria-live`, `role="alert"`)
- **Scroll animations** powered by [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Analytics** via Vercel Web Analytics

---

## 🛠️ Tech Stack

| Category          | Technology                          |
|-------------------|-------------------------------------|
| Frontend          | React, React Router                 |
| Styling           | Tailwind CSS                        |
| Animations        | AOS (Animate On Scroll)             |
| Icons             | react-icons                         |
| Email Service     | EmailJS                             |
| Deployment        | Vercel                              |
| Analytics         | Vercel Web Analytics                |

---

## 📂 Project Structure

```
my-personal-space/
├── public/
│   ├── projects/          # Project preview images & videos
│   └── resume.pdf
├── src/
│   ├── assets/             # Static assets (profile photo, etc.)
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── educationData.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── Layout.jsx
│   └── App.jsx
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vidhisonani/my-personal-space.git
cd my-personal-space

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get these values from your [EmailJS dashboard](https://dashboard.emailjs.com/admin).

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

---

## 📌 Featured Projects

### [SplitEase](https://split-ease-by-vidhi.vercel.app) — MERN Expense Sharing Platform
A full-stack bill-splitting app that eliminates awkward math. Split expenses with friends, track balances, and settle debts — all in one clean interface.
**Stack:** React, Node.js, Express, MongoDB

### [Chef Claude](https://chef-claude-react-five.vercel.app) — AI Recipe Generator
A full-stack recipe generator that creates recipes from a list of ingredients using Groq AI, with secure backend API handling.
**Stack:** React, Node.js, Express, Groq AI

Additional mini projects (React practice builds and vanilla JS/HTML/CSS projects) are showcased within the Projects section of the site.

---

## 📫 Contact

- **Portfolio:** [vidhipatel-portfolio.vercel.app](https://vidhipatel-portfolio.vercel.app)
- **GitHub:** [@vidhisonani](https://github.com/vidhisonani)
- **LinkedIn:** [Vidhi Patel](https://www.linkedin.com/in/vidhipatel73/)
- **Email:** vidhilotus7@gmail.com

---

This repository is publicly available for portfolio and reference purposes.
Please don't copy the code or content directly.
You're welcome to use it as inspiration for your own projects.

If you enjoyed this project or found it inspiring, I'd appreciate a ⭐ on the repository!

---

<p align="center">Made with ❤️ by Vidhi Patel</p>