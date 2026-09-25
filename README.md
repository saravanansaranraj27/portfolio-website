# Saran Raj Saravanan | Portfolio Website

[![Status: Open to Work](https://img.shields.io/badge/Status-Open_to_Work-brightgreen)](mailto:ssaranraj15102021@gmail.com)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](#license)

> A modern, responsive, and performance-optimized personal portfolio showcasing my journey as a **Full Stack Developer**. Built with React and Vite, featuring system-aware theming, smooth scroll animations, custom SVG iconography, and a clean, data-driven architecture.

### 🌐 [Live Demo](https://saravanansaranraj27.github.io/portfolio-website)

---

## Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#️-installation--setup)
- [Development Commands](#-development-commands)
- [Customization](#-customization)
- [Resume](#-resume)
- [About Me](#-about-me)
- [Limitations](#-limitations)
- [Connect With Me](#-connect-with-me)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Features

- **System-Aware Theming:** Dark/Light mode is detected from the OS `prefers-color-scheme` setting on load (via an inline `index.html` script to avoid a flash of the wrong theme, and via the `useSystemTheme` hook), with a manual toggle in the header for the current session.
- **Performance Optimized:** Built with **Vite** for instant HMR and optimized production bundles.
- **Skeleton Loading State:** A dedicated `Loader` component renders an animated skeleton of the whole page while content is being prepared, avoiding a blank first paint.
- **Smooth Animations:** Custom `IntersectionObserver`-based `Reveal` component for scroll-triggered reveal effects without heavy external libraries.
- **Responsive Design:** Mobile-first CSS architecture using CSS variables (`variables.css`, `themes.css`) for consistent theming across devices.
- **Interactive UI:** Hover effects, ambient radial-gradient background glow, and copy-to-clipboard for the email address.
- **Resume Integration:** Direct "View" and "Download" actions for the PDF resume, bundled as a static asset.
- **Zero External Icons:** Fully custom SVG icon system implemented directly in JSX (`Icons.jsx`).
- **Active Section Tracking:** Navigation highlights update automatically based on scroll position via `IntersectionObserver`, with a "back to top" button that appears after scrolling.
- **Data-Driven Content:** All personal info, skills, experience, projects, education, and certifications live in a single structured data file, decoupled from the presentational components.

## 🛠️ Tech Stack

| Category          | Technologies                                                                                          |
| :---------------- | :---------------------------------------------------------------------------------------------------- |
| **Frontend Core** | React 19, JavaScript (ES6+), Vite 8                                                                   |
| **Styling**       | CSS3, CSS Variables, Flexbox/Grid, Media Queries, Google Fonts (Inter, Sora)                          |
| **Icons**         | Custom SVG Components (no external icon libraries)                                                    |
| **State Mgmt**    | React Hooks (`useState`, `useEffect`, `useRef`), custom `useSystemTheme` hook, `IntersectionObserver` |
| **Tooling**       | ESLint (flat config, React Hooks + React Refresh plugins)                                             |
| **Deployment**    | GitHub Pages via `gh-pages`                                                                           |

## 📂 Project Structure

```text
src/
├── assets/
│   ├── Saran_Raj_Saravanan_Resume.pdf   # Resume file
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── common/
│   │   ├── Loader.jsx                   # Skeleton loading screen
│   │   ├── Reveal.jsx                   # Scroll-triggered reveal wrapper
│   │   └── TechTags.jsx                 # Tech/skill tag & chip buttons
│   └── layout/
│       ├── Header.jsx                   # Nav bar, theme toggle, mobile menu
│       └── Footer.jsx
├── data/
│   └── portfolio.js                     # Personal info, skills, experience,
│                                         # projects, education, certifications
├── hooks/
│   └── useSystemTheme.js                # Detects OS light/dark preference
├── layouts/
│   └── MainLayout.jsx                   # Page shell: header + content + footer
├── pages/
│   ├── Home/
│   │   └── Home.jsx                     # About/Skills/Experience/Projects/
│   │                                     # Education/Certifications sections
│   └── NotFound/
│       └── NotFound.jsx
├── styles/
│   ├── globals.css                      # Global layout & component styles
│   ├── themes.css                       # Light/dark theme variables
│   └── variables.css                    # Shared CSS custom properties
├── App.jsx                              # Root component, scroll/theme logic
├── Icons.jsx                            # Custom SVG icon components
└── main.jsx                             # Entry point
```

## 🏗️ Installation & Setup

To run this project locally, ensure you have **Node.js 18+** installed.

1.  **Clone the repository:**

```bash
    git clone https://github.com/saravanansaranraj27/portfolio-website.git
    cd portfolio-website
```

2.  **Install dependencies:**

```bash
    npm install
```

3.  **Install `gh-pages` (for GitHub Pages deployment):**

```bash
    npm install --save-dev gh-pages
```

4.  **Start the development server:**

```bash
    npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

5.  **Build for production:**

```bash
    npm run build
```

6.  **Deploy to GitHub Pages:**

```bash
    npm run deploy
```

## 📋 Development Commands

```sh
npm run dev       # Start the Vite development server (--host enabled)
npm run build     # Create a production build
npm run lint       # Run ESLint
npm run preview    # Preview the production build locally
npm run deploy      # Build and publish the dist/ folder to GitHub Pages
```

## 🎨 Customization

This portfolio is designed to be easily customizable. Update your personal details by editing the `personalInfo`, `navLinks`, `skills`, `experience`, `projects`, `education`, and `certifications` exports inside **`src/data/portfolio.js`**.

**Example: Updating Projects**

```javascript
export const projects = [
  {
    title: "Your Project Name",
    tech: ["React", "Spring Boot"],
    description: "Brief description of the project.",
    links: [
      { label: "Code", url: "https://github.com/your-repo", type: "code" },
      { label: "Live Demo", url: "https://your-live-demo.com", type: "live" },
    ],
  },
];
```

**Example: Adding a New Skill Icon**

Update the `TECH_META` object at the top of `src/data/portfolio.js` (icons themselves come from `src/Icons.jsx`):

```javascript
const TECH_META = {
  // ... existing skills
  "New Technology": { color: "#hexcode", Icon: YourCustomIcon },
};
```

## 📄 Resume

You can view or download my latest resume directly from the portfolio (About section) or via the link below:
[📥 Download Resume PDF](./src/assets/Saran_Raj_Saravanan_Resume.pdf)

## 👨‍💻 About Me

I am a **Full Stack Developer** based in Dindigul, India, with 1.5+ years of experience across **Python (FastAPI, automation scripting)** and **Java (Spring Boot, React.js, Angular)**, building REST APIs and full-stack web applications. I have a strong foundation in incident management and Root Cause Analysis, with proven results improving system reliability and reducing manual triage effort. I recently completed my M.B.A. in Systems Management and am currently open to new opportunities where I can leverage my technical skills and strategic management insights.

- **Languages:** Python, Java, JavaScript, TypeScript, Go
- **Backend:** FastAPI, REST APIs, Spring Boot, Spring Security, Microservices
- **Frontend:** React.js, Angular, HTML5, CSS3
- **Databases:** MySQL, SQLAlchemy
- **Cloud & DevOps:** AWS, Microsoft Azure, Git, Kibana, GitHub Copilot, CI/CD
- **Experience:** Proven track record in incident management, automation, and full-stack development at Capgemini

## ⚠️ Limitations

- All content (bio, skills, experience, projects, education, certifications) is hard-coded in `src/data/portfolio.js` — there is no CMS or backend, so updates require a code change and redeploy.
- The theme toggle is session-only: it is not persisted to `localStorage`, so the site falls back to the OS `prefers-color-scheme` on every reload.
- This is a single-page, single-route app (`NotFound.jsx` exists in the codebase but isn't wired up to a router, since no routing library is used).
- No automated tests are included in the project.

## 🔗 Connect With Me

|                                                                          LinkedIn                                                                          |                                                                     GitHub                                                                      |                                                                  Gmail                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saran-raj-saravanan) | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/saravanansaranraj27) | [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ssaranraj15102021@gmail.com) |

## Contributing

This is a personal portfolio, but bug reports and suggestions are welcome via issues or pull requests. Please run `npm run lint` and `npm run build` before submitting changes.

## License

This project is licensed under the MIT License.

---

<div align="center">
  <sub>Built with React & Vite © 2026 Saran Raj Saravanan</sub>
</div>
