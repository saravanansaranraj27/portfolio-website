import { ArrowUpIcon } from "../Icons.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

const MainLayout = ({
  children,
  activeSection,
  onSetActiveSection,
  onScrollToTop,
  theme,
  onToggleTheme,
  showBackToTop,
}) => (
  <div className="app-container">
    <Header
      activeSection={activeSection}
      onSetActiveSection={onSetActiveSection}
      onScrollToTop={onScrollToTop}
      theme={theme}
      onToggleTheme={onToggleTheme}
    />
    {children}
    <Footer />
    {showBackToTop && (
      <button
        className="back-to-top"
        onClick={onScrollToTop}
        aria-label="Back to top"
      >
        <ArrowUpIcon />
      </button>
    )}
  </div>
);

export default MainLayout;
