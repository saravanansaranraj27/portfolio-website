import {
  BriefcaseIcon,
  CopyIcon,
  CheckIcon,
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "../../Icons.jsx";
import ResumePDF from "../../assets/Saran_Raj_Saravanan_Resume.pdf";
import {
  certifications,
  education,
  experience,
  personalInfo,
  projects,
  skills,
} from "../../data/portfolio.js";
import Reveal from "../../components/common/Reveal.jsx";
import {
  ChipButton,
  TechBadgeButton,
  TechButton,
} from "../../components/common/TechTags.jsx";

const Home = ({ emailCopied, onCopyEmail }) => (
  <>
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
                onClick={onCopyEmail}
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
              Full Stack Developer with 1.5+ years of experience across Python
              (FastAPI, automation scripting) and Java (Spring Boot, React.js,
              Angular), building REST APIs and full-stack web applications.
              Strong foundation in incident management and Root Cause Analysis,
              with proven results improving system reliability and reducing
              manual triage effort. Experienced in cloud deployment on AWS and
              Microsoft Azure. Eager to contribute technical expertise to a
              collaborative, growth-oriented team.
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

                    <span className="company capgemini-company">
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
  </>
);

export default Home;
