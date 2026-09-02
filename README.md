---

# Saran Raj Saravanan | Portfolio Website
[![Status: Open to Work](https://img.shields.io/badge/Status-Open_to_Work-brightgreen)](mailto:ssaranraj15102021@gmail.com)

[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](#license)

> A modern, responsive, and performance-optimized personal portfolio showcasing my journey as a **Java Full Stack Developer**. Built with React and Vite, featuring dynamic theming, smooth scroll animations, and a clean architectural design.

### 🌐 [Live Demo](https://saravanansaranraj27.github.io/portfolio)

---

## 🚀 Features

- **Dynamic Theming:** Seamless Dark/Light mode toggle with persistent local storage preference and system detection.
- **Performance Optimized:** Built with **Vite** for instant HMR and optimized production bundles.
- **Smooth Animations:** Custom `IntersectionObserver` hook for scroll-triggered reveal effects without heavy external libraries.
- **Responsive Design:** Mobile-first CSS architecture using CSS Variables for consistent theming across devices.
- **Interactive UI:** Hover effects, ambient background gradients, and glassmorphism elements.
- **Resume Integration:** Direct view and download functionality for PDF resume.

## 🛠️ Tech Stack

| Category          | Technologies                                       |
| :---------------- | :------------------------------------------------- |
| **Frontend Core** | React 18, JavaScript (ES6+), Vite                  |
| **Styling**       | CSS3, CSS Variables, Flexbox/Grid, Media Queries   |
| **Icons**         | Custom SVG Components (No external icon libraries) |
| **Deployment**    | GitHub Pages / Netlify / Vercel                    |

## 📂 Project Structure

```text
src/
├── assets/
│   └── Saran_Raj_Saravanan_Resume.pdf   # Resume file
├── App.jsx                              # Main component & data structure
├── index.css                            # Global styles, themes, and animations
└── main.jsx                             # Entry point
```

## 🏗️ Installation & Setup

To run this project locally, ensure you have **Node.js** installed.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/saravanansaranraj27/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Customization

This portfolio is designed to be easily customizable. You can update your personal details by modifying the `personalInfo`, `skills`, `experience`, and `projects` objects inside `src/App.jsx`.

**Example: Updating Projects**

```javascript
const projects = [
  {
    title: "Your Project Name",
    tech: ["React", "Spring Boot"],
    description: "Brief description of the project.",
    links: [
      { label: "Code", url: "https://github.com/your-repo" },
      { label: "Live", url: "https://your-live-demo.com" },
    ],
  },
];
```

## 📄 Resume

You can view or download my latest resume directly from the portfolio or via the link below:
[📥 Download Resume PDF](./src/assets/Saran_Raj_Saravanan_Resume.pdf)

## 👨‍💻 About Me

I am a **Java Full Stack Developer** based in Chennai, India, with expertise in building scalable web applications using **Spring Boot**, **React.js**, and **Python Automation**. I have recently completed my M.B.A. in Systems Management and am currently open to new opportunities where I can leverage my technical skills and strategic management insights.

- **Backend:** Spring Boot, Microservices, FastAPI, REST APIs
- **Frontend:** React.js, Angular, HTML5, CSS3
- **Cloud & DevOps:** AWS, Azure, Git, Kibana, CI/CD
- **Experience:** Proven track record in incident management, automation, and full-stack development

## 🔗 Connect With Me

|                                                                          LinkedIn                                                                          |                                                                     GitHub                                                                      |                                                                  Gmail                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saran-raj-saravanan) | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/saravanansaranraj27) | [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ssaranraj15102021@gmail.com) |

---

<div align="center">
  <sub>Built with ❤️ by <strong>Saran Raj Saravanan</strong></sub>
  <br/>
  <sub>© 2026 All Rights Reserved.</sub>
</div>
