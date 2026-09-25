import { useEffect, useState } from "react";
import Loader from "./components/common/Loader.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import { personalInfo } from "./data/portfolio.js";
import { useSystemTheme } from "./hooks/useSystemTheme.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useSystemTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainLayout
      activeSection={activeSection}
      onSetActiveSection={setActiveSection}
      onScrollToTop={scrollToTop}
      theme={theme}
      onToggleTheme={toggleTheme}
      showBackToTop={showBackToTop}
    >
      <Home emailCopied={emailCopied} onCopyEmail={copyEmail} />
    </MainLayout>
  );
};

export default App;
