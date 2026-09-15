import { useEffect, useState, useRef } from "react";
import ResumePDF from "./assets/Saran_Raj_Saravanan_Resume.pdf";
import {
  SunIcon,
  MoonIcon,
  PinIcon,
  MailIcon,
  PhoneIcon,
  LinkedInIcon,
  GitHubIcon,
  ExternalLinkIcon,
  ArrowUpIcon,
  FileTextIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
  MenuIcon,
  CloseIcon,
  CodeIcon,
  ServerIcon,
  ShieldIcon,
  PlugIcon,
  WindowIcon,
  DatabaseIcon,
  CloudIcon,
  GitBranchIcon,
  ActivityIcon,
  SparkleIcon,
  AlertIcon,
  TargetIcon,
  BoltIcon,
  RefreshIcon,
  KeyIcon,
  WaveIcon,
  PaletteIcon,
  BarChartIcon,
  UsersIcon,
  FlaskIcon,
  CpuIcon,
  BriefcaseIcon,
} from "./Icons.jsx";
import "./index.css";

const TECH_META = {
  Java: { color: "#f8981d", Icon: CodeIcon },
  Python: { color: "#3776ab", Icon: CodeIcon },
  JavaScript: { color: "#e64a19", Icon: CodeIcon },
  TypeScript: { color: "#3178c6", Icon: CodeIcon },
  Go: { color: "#00add8", Icon: CodeIcon },
  "Spring Boot": { color: "#6db33f", Icon: ServerIcon },
  "Spring Security": { color: "#6db33f", Icon: ShieldIcon },
  "REST APIs": { color: "#a78bfa", Icon: PlugIcon },
  Microservices: { color: "#8b5cf6", Icon: PlugIcon },
  FastAPI: { color: "#059669", Icon: ServerIcon },
  React: { color: "#ff4a5a", Icon: WindowIcon },
  Angular: { color: "#dd0031", Icon: WindowIcon },
  HTML5: { color: "#e34f26", Icon: WindowIcon },
  CSS3: { color: "#2f8fce", Icon: WindowIcon },
  MySQL: { color: "#4479a1", Icon: DatabaseIcon },
  SQLAlchemy: { color: "#d34a3f", Icon: DatabaseIcon },
  AWS: { color: "#ff9900", Icon: CloudIcon },
  "Microsoft Azure": { color: "#0078d4", Icon: CloudIcon },
  Git: { color: "#f05032", Icon: GitBranchIcon },
  Kibana: { color: "#E01563", Icon: ActivityIcon },
  "GitHub Copilot": { color: "#8957e5", Icon: SparkleIcon },
  "Incident Management": { color: "#f2665a", Icon: AlertIcon },
  "Root Cause Analysis": { color: "#f5a623", Icon: TargetIcon },
  Automation: { color: "#2ECC71", Icon: BoltIcon },
  Agile: { color: "#4E1C66", Icon: RefreshIcon },
  JWT: { color: "#d63aff", Icon: KeyIcon },
  Vite: { color: "#8a67f8", Icon: BoltIcon },
  RxJS: { color: "#b7178c", Icon: WaveIcon },
  SCSS: { color: "#cd6799", Icon: PaletteIcon },
  "Angular Material": { color: "#dd0031", Icon: PaletteIcon },
  "ngx-charts": { color: "#a855f7", Icon: BarChartIcon },
};

const CHIP_ICONS = {
  INCIDENT: AlertIcon,
  AUTOMATION: BoltIcon,
  RCA: TargetIcon,
  TEAM: UsersIcon,
  RESEARCH: FlaskIcon,
  ANALYSIS: BarChartIcon,
  IOT: CpuIcon,
  DEV: CodeIcon,
  CLOUD: CloudIcon,
  "AI TOOLS": SparkleIcon,
};

const TechButton = ({ label }) => {
  const meta = TECH_META[label] || {
    color: "#8592ad",
    Icon: CodeIcon,
  };

  const { color, Icon } = meta;

  return (
    <button
      type="button"
      className={`tag-btn ${label === "React" ? "react-tag" : ""}`}
      style={{ "--tag-color": color }}
    >
      <Icon />
      {label}
    </button>
  );
};

const TechBadgeButton = ({ label }) => {
  const meta = TECH_META[label] || {
    color: "#8592ad",
    Icon: CodeIcon,
  };

  const { color, Icon } = meta;

  return (
    <button
      type="button"
      className={`tech-badge-btn ${label === "React" ? "react-tag" : ""}`}
      style={{ "--tag-color": color }}
    >
      <Icon />
      {label}
    </button>
  );
};

const ChipButton = ({ tag, chipClass }) => {
  const Icon = CHIP_ICONS[tag] || CodeIcon;

  return (
    <button type="button" className={`chip-btn ${chipClass}`}>
      <Icon />
      {tag}
    </button>
  );
};

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
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
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

const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-content">
      <div className="skeleton-header"></div>
      <div className="skeleton-subtitle"></div>
      <div className="skeleton-grid">
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("portfolio-theme");

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    return prefersLight ? "light" : "dark";
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [emailCopied, setEmailCopied] = useState(false);

  const personalInfo = {
    name: "Saran Raj Saravanan",
    title:
      "Java Full Stack Developer | Spring Boot | React | Python Automation",
    location: "Dindigul, India",
    email: "ssaranraj15102021@gmail.com",
    phone: "+91 75488 62252",
    linkedin: "https://linkedin.com/in/saran-raj-saravanan",
    github: "https://github.com/saravanansaranraj27",
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Badges", href: "#certifications" },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "TypeScript", "Go"],
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
    {
      category: "Frontend",
      items: ["React", "Angular", "HTML5", "CSS3"],
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLAlchemy"],
    },
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
      client:
        "Fortune 500 US-based Multinational Telecommunications & Media Conglomerate",
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
        "Full-stack event booking platform with JWT authentication and role-based access control. Includes event listing CRUD, booking management, an admin dashboard, and a calendar view.",
      links: [
        {
          label: "Frontend",
          url: "https://github.com/saravanansaranraj27/booking-app-frontend",
          type: "code",
        },
        {
          label: "Backend",
          url: "https://github.com/saravanansaranraj27/booking-app-backend",
          type: "code",
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
          type: "code",
        },
      ],
    },
    {
      title: "TaskFlow",
      tech: ["React", "Go", "MySQL", "Vite"],
      description:
        "Full-stack productivity workspace with a React (Vite) frontend and a Go + MySQL backend. Includes task management, colorful quick notes, goal tracking, and account authentication.",
      links: [
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/task-flow",
          type: "code",
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
          type: "code",
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
          type: "live",
        },
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/blood-donation-tracker",
          type: "code",
        },
      ],
    },
    {
      title: "Dev Tools",
      tech: ["Angular", "TypeScript", "RxJS", "SCSS"],
      description:
        "Responsive Angular 20 utility suite with standalone components, featuring a searchable developer cheat sheet, JSON formatter, and Base64 encoder.",
      links: [
        {
          label: "Live Demo",
          url: "https://saravanansaranraj27.github.io/dev-tools/",
          type: "live",
        },
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/dev-tools",
          type: "code",
        },
      ],
    },
    {
      title: "Web Tools Pro",
      tech: ["React", "Vite", "JavaScript", "CSS3"],
      description:
        "A high-performance, privacy-first developer utility suite built entirely client-side. Features Markdown parser, password strength analyzer, and text analytics.",
      links: [
        {
          label: "Live Demo",
          url: "https://saravanansaranraj27.github.io/web-tools-pro/",
          type: "live",
        },
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/web-tools-pro",
          type: "code",
        },
      ],
    },
    {
      title: "PRISM Dashboard",
      tech: ["Angular", "Angular Material", "ngx-charts", "TypeScript", "SCSS"],
      description:
        "Behavioral-finance analytics dashboard visualizing small-cap stability trends, SCARF neurocognitive bias metrics, and SEBI compliance indicators.",
      links: [
        {
          label: "Live Demo",
          url: "https://saravanansaranraj27.github.io/prism-dashboard/",
          type: "live",
        },
        {
          label: "Code",
          url: "https://github.com/saravanansaranraj27/prism-dashboard",
          type: "code",
        },
      ],
    },
  ];

  const education = [
    {
      degree: "M.B.A. — Systems Management",
      institution: "Bharathidasan University, India",
      institutionClass: "bharathidasan-company",
      period: "2023–2026",
      details: [
        {
          tag: "RESEARCH",
          chip: "chip-rca",
          text: "PRISM Project: Conducted research-based analysis on mutual fund redemption behavior and liquidity risk using DeepSeek AI.",
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
      institutionClass: "mepco-company",
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
      issuerClass: "microsoft-company",
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
      issuerClass: "github-company",
      details: [
        {
          tag: "AI TOOLS",
          chip: "chip-rca",
          text: "Mastered AI-pair programming to enhance code quality and development speed.",
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="app-container">
      <div className="topbar">
        <div className="topbar-inner">
          <span className="brand">{personalInfo.name}</span>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="topbar-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <nav>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <header className="hero">
        <div className="container">
          <Reveal>
            <div className="hero-header-group">
              <h1>{personalInfo.name}</h1>

              <span className="open-to-work-badge">
                <span className="badge-dot"></span>
                Open to Work
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="subtitle">{personalInfo.title}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="contact-info">
              <span className="location-link">
                <PinIcon />
                {personalInfo.location}
              </span>

              <div className="email-copy-group">
                <a
                  className="link-email"
                  href={`mailto:${personalInfo.email}`}
                  aria-label={`Email ${personalInfo.email}`}
                  title={personalInfo.email}
                >
                  <MailIcon />
                  Email
                </a>

                <button
                  className="copy-btn"
                  onClick={copyEmail}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {emailCopied ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>

              <a
                className="link-phone"
                href={`tel:${personalInfo.phone}`}
                aria-label={`Call ${personalInfo.phone}`}
                title={personalInfo.phone}
              >
                <PhoneIcon />
                Mobile
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
                className="btn btn-ghost"
                href="https://github.com/saravanansaranraj27/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                Portfolio
              </a>

              <a
                className="btn btn-github"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>

              <a
                className="btn btn-ghost"
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileTextIcon />
                View Resume
              </a>

              <a
                className="btn btn-ghost"
                href={ResumePDF}
                download="Saran_Raj_Saravanan_Resume.pdf"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <Reveal>
            <h2>Professional Summary</h2>

            <div className="summary-card">
              <p className="summary-text">
                Java Full Stack Developer with 1.5+ years of experience across
                application development, systems analysis, and automation.
                Strong in Spring Boot, React, REST APIs, and Python scripting to
                improve system reliability, performance, and scalability, with a
                track record in incident management, Root Cause Analysis, and
                DevOps collaboration on AWS and Microsoft Azure.
              </p>
            </div>
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
                      <TechButton key={i} label={item} />
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
                  <div className="exp-header-group">
                    <div className="exp-header">
                      <h3>{exp.role}</h3>

                      <span className="company experience-company">
                        @ {exp.company}
                      </span>

                      <span className="date">{exp.period}</span>
                    </div>

                    {exp.client && (
                      <button type="button" className="client-tag">
                        <BriefcaseIcon />
                        {exp.client}
                      </button>
                    )}
                  </div>

                  <ul className="achievements-list">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="achievement-row">
                        <ChipButton tag={a.tag} chipClass={a.chip} />
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
                      <TechBadgeButton key={i} label={t} />
                    ))}
                  </div>

                  {project.links?.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`project-link ${
                            link.type === "live" ? "link-live" : "link-code"
                          }`}
                        >
                          {link.type === "live" ? (
                            <ExternalLinkIcon />
                          ) : (
                            <GitHubIcon />
                          )}

                          {link.label}
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

          <div className="timeline education-timeline">
            {education.map((edu, index) => (
              <Reveal key={index} delay={index * 100} className="timeline-item">
                <div className="experience-card">
                  <div className="exp-header">
                    <h3>{edu.degree}</h3>

                    <span className={`company ${edu.institutionClass}`}>
                      @ {edu.institution}
                    </span>

                    <span className="date">{edu.period}</span>
                  </div>

                  <ul className="achievements-list">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="achievement-row">
                        <ChipButton tag={detail.tag} chipClass={detail.chip} />
                        <span className="achievement-text">{detail.text}</span>
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
            <h2>Certifications & Trainings</h2>
          </Reveal>

          <div className="timeline">
            {certifications.map((cert, index) => (
              <Reveal key={index} delay={index * 100} className="timeline-item">
                <div className="experience-card">
                  <div className="exp-header">
                    <h3>{cert.title}</h3>

                    <span className={`company ${cert.issuerClass}`}>
                      @ {cert.issuer}
                    </span>
                  </div>

                  <ul className="achievements-list">
                    {cert.details.map((detail, i) => (
                      <li key={i} className="achievement-row">
                        <ChipButton tag={detail.tag} chipClass={detail.chip} />
                        <span className="achievement-text">{detail.text}</span>
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
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
};

export default App;
