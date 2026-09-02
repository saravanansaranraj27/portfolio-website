import { useEffect, useState, useRef } from "react";
import ResumePDF from "./assets/Saran_Raj_Saravanan_Resume.pdf";
import "./index.css";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4.5" />
    <path
      strokeLinecap="round"
      d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z"
    />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s-6.5-6.06-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.94-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6.6 4.5h3l1.2 4-2 1.3a11 11 0 0 0 5.4 5.4l1.3-2 4 1.2v3c0 1-.9 1.8-1.9 1.6a16 16 0 0 1-12.9-12.9c-.2-1 .6-1.9 1.6-1.9Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.2a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.5 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.73V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.87c-2.78.6-3.37-1.2-3.37-1.2-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2.2Z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved) return saved;

    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("portfolio-theme", next);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  const personalInfo = {
    name: "Saran Raj Saravanan",
    title:
      "Java Full Stack Developer | Spring Boot | React.js | Python Automation",
    location: "Chennai, India",
    email: "ssaranraj15102021@gmail.com",
    phone: "+91 75488 62252",
    linkedin: "https://linkedin.com/in/saran-raj-saravanan",
    github: "https://github.com/saravanansaranraj27",
  };

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      items: [
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "Microservices",
        "FastAPI",
      ],
    },
    { category: "Frontend", items: ["React.js", "Angular", "HTML5", "CSS3"] },
    { category: "Databases", items: ["MySQL", "SQLAlchemy"] },
    {
      category: "Cloud Platforms",
      items: ["AWS", "Microsoft Azure"],
    },
    {
      category: "Tools & Practices",
      items: [
        "Git",
        "Kibana",
        "GitHub Copilot",
        "Incident Management",
        "Root Cause Analysis",
        "Automation",
        "Agile",
      ],
    },
  ];

  const experience = [
    {
      role: "Analyst",
      company: "Capgemini",
      location: "Chennai, India",
      period: "Jul 2024 – Apr 2026",
      achievements: [
        {
          tag: "INCIDENT",
          chip: "chip-incident",
          text: "Managed and resolved 10+ production incidents monthly, improving system uptime through detailed Root Cause Analysis.",
        },
        {
          tag: "AUTOMATION",
          chip: "chip-automation",
          text: "Developed Python automation scripts to streamline SOPs, reducing manual effort by 70%.",
        },
        {
          tag: "AUTOMATION",
          chip: "chip-automation",
          text: "Implemented a FastAPI-based issue identification feature to enhance application monitoring.",
        },
        {
          tag: "TEAM",
          chip: "chip-team",
          text: "Built rules and checks for initial triage, reducing team effort by 70%.",
        },
        {
          tag: "RCA",
          chip: "chip-rca",
          text: "Used Kibana, AI tools, and GitHub Copilot to identify root causes of code and API failures.",
        },
        {
          tag: "AUTOMATION",
          chip: "chip-automation",
          text: "Automated ticket creation via AI tools, cutting manual triage by 50% and resolution time by 80%.",
        },
        {
          tag: "TEAM",
          chip: "chip-team",
          text: "Collaborated with cross-functional teams in an Agile environment.",
        },
      ],
    },
  ];

  const projects = [
    {
      title: "Event Booking System",
      tech: ["Spring Boot", "Spring Security", "MySQL", "React", "JWT"],
      description:
        "Full-stack event booking platform with JWT authentication and role-based access control. Includes event listing CRUD, booking management, an admin dashboard, and a calendar view, built with a Spring Boot REST API and a React (Vite) frontend.",
      links: [
        {
          label: "Frontend",
          url: "https://github.com/saravanansaranraj27/booking-app-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/saravanansaranraj27/booking-app-backend",
        },
      ],
    },
    {
      title: "Inventory Management Application",
      tech: ["FastAPI", "SQLAlchemy", "MySQL", "React"],
      description:
        "Full-stack inventory system with complete CRUD flows, a responsive frontend, and backend APIs optimized for scalable, secure data handling.",
      links: [
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/inventory-management-app",
        },
      ],
    },
    {
      title: "Task Manager Application",
      tech: ["React", "JavaScript", "Vite"],
      description:
        "Task management app with authentication and an admin panel, built with React Context API and custom hooks for scalable state.",
      links: [
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/task-manager-inventory",
        },
      ],
    },
    {
      title: "Blood Donation Tracker",
      tech: ["React", "JavaScript", "Vite"],
      description:
        "Interactive health dashboard tracking donation history with Recharts trend analysis, predictive scheduling, and medical stability algorithms.",
      links: [
        {
          label: "Live Demo",
          url: "https://saravanansaranraj27.github.io/blood-donation-tracker/",
        },
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/blood-donation-tracker",
        },
      ],
    },
    {
      title: "Dev Tools",
      tech: ["Angular", "TypeScript", "RxJS", "SCSS"],
      description:
        "Responsive Angular 20 utility suite with standalone components and lazy-loaded routes, featuring a searchable developer cheat sheet (Java, Spring Boot, Python, FastAPI, Git, SQL, and more), a JSON prettify/minify/validate formatter, and a Unicode-safe Base64 encoder/decoder — fully client-side with no backend.",
      links: [
        {
          label: "Live Demo",
          url: "https://saravanansaranraj27.github.io/dev-tools/",
        },
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/dev-tools",
        },
      ],
    },
    {
      title: "Web Tools Pro",
      tech: ["React", "Vite", "JavaScript", "CSS3"],
      description:
        "A high-performance, privacy-first developer utility suite built entirely client-side. Features a custom regex-based Markdown parser with real-time preview (supporting tables, badges, and code blocks), a password strength analyzer, website status checker, and text analytics. Designed with a dynamic violet/purple theme system, ambient CSS animations, and zero external UI dependencies.",
      links: [
        {
          label: "Live Demo",
          url: "https://saravanansaranraj27.github.io/web-tools-pro/",
        },
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/web-tools-pro",
        },
      ],
    },
  ];

  const education = [
    {
      degree: "M.B.A. — Systems Management",
      institution: "Bharathidasan University, India",
      period: "2023–2026",
      details: [
        {
          tag: "RESEARCH",
          chip: "chip-rca",
          text: "PRISM Project: Conducted research-based analysis on mutual fund redemption behavior and liquidity risk using DeepSeek AI for predictive insights.",
        },
        {
          tag: "ANALYSIS",
          chip: "chip-incident",
          text: "Focused on financial data analysis and behavioral metrics to improve investment decision-making processes.",
        },
      ],
    },
    {
      degree: "B.E. — Civil Engineering",
      institution: "Mepco Schlenk Engineering College, India",
      period: "2019–2023",
      details: [
        {
          tag: "IOT",
          chip: "chip-automation",
          text: "EWPAS Project: Designed an Efficient Water Preference & Allocation System using Arduino and Blynk IoT, improving water efficiency by 30%.",
        },
        {
          tag: "DEV",
          chip: "chip-team",
          text: "Developed embedded C programming solutions for real-time resource management and overhead tank optimization.",
        },
      ],
    },
  ];

  const certifications = [
    {
      title: "Microsoft Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      details: [
        {
          tag: "CLOUD",
          chip: "chip-automation",
          text: "Validated knowledge of machine learning and AI workloads on Microsoft Azure.",
        },
      ],
    },
    {
      title: "GitHub Copilot Training",
      issuer: "GitHub",
      details: [
        {
          tag: "AI TOOLS",
          chip: "chip-rca",
          text: "Mastered AI-pair programming to enhance code quality and development speed.",
        },
      ],
    },
  ];

  return (
    <div className="app-container">
      <div className="topbar">
        <div className="topbar-inner">
          <span className="brand">Saran Raj Saravanan</span>
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>

      <header className="hero">
        <div className="container">
          <Reveal>
            <h1>{personalInfo.name}</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="subtitle">{personalInfo.title}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="contact-info">
              <span>
                <PinIcon />
                {personalInfo.location}
              </span>
              <a className="link-email" href={`mailto:${personalInfo.email}`}>
                <MailIcon />
                {personalInfo.email}
              </a>
              <a className="link-phone" href={`tel:${personalInfo.phone}`}>
                <PhoneIcon />
                {personalInfo.phone}
              </a>
              <a
                className="link-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={`mailto:${personalInfo.email}`}
              >
                <MailIcon /> Contact me
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/saravanansaranraj27/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> View Portfolio Code
              </a>
              <a
                className="btn btn-ghost"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> View GitHub
              </a>
              <a
                className="btn btn-ghost"
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileTextIcon /> View Resume
              </a>
              <a
                className="btn btn-ghost"
                href={ResumePDF}
                download="Saran_Raj_Saravanan_Resume.pdf"
              >
                <DownloadIcon /> Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <Reveal>
            <h2>Professional Summary</h2>
            <p className="summary-text">
              Java Full Stack Developer with 1.83 years of experience across
              application development, systems analysis, and automation. Strong
              in Spring Boot, React.js, REST APIs, and Python scripting to
              improve system reliability, performance, and scalability, with a
              track record in incident management, Root Cause Analysis, and
              DevOps collaboration on AWS and Microsoft Azure.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <Reveal>
            <h2>Core Skills</h2>
          </Reveal>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <Reveal key={index} delay={index * 50}>
                <div className="skill-card">
                  <h3>{skillGroup.category}</h3>
                  <div className="tags">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <Reveal>
            <h2>Professional Experience</h2>
          </Reveal>
          <div className="timeline">
            {experience.map((exp, index) => (
              <Reveal key={index} delay={index * 100} className="timeline-item">
                <div className="experience-card">
                  <div className="exp-header">
                    <h3>{exp.role}</h3>
                    <span className="company">@ {exp.company}</span>
                    <span className="date">{exp.period}</span>
                  </div>
                  <ul className="achievements-list">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="achievement-row">
                        <span className={`chip ${a.chip}`}>{a.tag}</span>
                        <span className="achievement-text">{a.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <Reveal>
            <h2>Projects</h2>
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.links?.length > 0 && (
                    <div className="project-links">
                      {project.links.map((l, i) => (
                        <a
                          key={i}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <GitHubIcon /> {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <Reveal>
            <h2>Education</h2>
          </Reveal>
          <div className="timeline" style={{ marginBottom: "48px" }}>
            {education.map((edu, index) => (
              <Reveal key={index} delay={index * 100} className="timeline-item">
                <div className="experience-card">
                  <div className="exp-header">
                    <h3>{edu.degree}</h3>
                    <span className="company">@ {edu.institution}</span>
                    <span className="date">{edu.period}</span>
                  </div>
                  <ul className="achievements-list">
                    {edu.details.map((d, i) => (
                      <li key={i} className="achievement-row">
                        <span className={`chip ${d.chip}`}>{d.tag}</span>
                        <span className="achievement-text">{d.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container">
          <Reveal>
            <h2>Certifications</h2>
          </Reveal>
          <div className="timeline">
            {certifications.map((cert, index) => (
              <Reveal key={index} delay={index * 100} className="timeline-item">
                <div className="experience-card">
                  <div className="exp-header">
                    <h3>{cert.title}</h3>
                    <span className="company">@ {cert.issuer}</span>
                  </div>
                  <ul className="achievements-list">
                    {cert.details.map((d, i) => (
                      <li key={i} className="achievement-row">
                        <span className={`chip ${d.chip}`}>{d.tag}</span>
                        <span className="achievement-text">{d.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p className="footer-line">
            Built with React & Vite © {new Date().getFullYear()} Saran Raj
            Saravanan
          </p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
};

export default App;
