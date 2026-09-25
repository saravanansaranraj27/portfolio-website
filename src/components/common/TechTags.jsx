import { CodeIcon } from "../../Icons.jsx";
import { TECH_META, CHIP_ICONS } from "../../data/portfolio.js";

export const TechButton = ({ label }) => {
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

export const TechBadgeButton = ({ label }) => {
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

export const ChipButton = ({ tag, chipClass }) => {
  const Icon = CHIP_ICONS[tag] || CodeIcon;

  return (
    <button type="button" className={`chip-btn ${chipClass}`}>
      <Icon />
      {tag}
    </button>
  );
};
