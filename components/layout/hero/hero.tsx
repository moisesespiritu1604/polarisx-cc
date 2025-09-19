"use client";
import "./hero.css";

interface HeroSectionProps {
  sectionId?: string;
  backgroundImage: string;
  title: string;
  description: string;
  titleColor?: string;
  borderColor?: string;
}

export default function HeroBanner({ 
  sectionId = "hero-section", 
  backgroundImage, 
  title, 
  description,
  titleColor = "#fff",
  borderColor = "var(--sexto)"
}: HeroSectionProps) {
  const sectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("${backgroundImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };

  const titleStyle = {
    color: titleColor,
    borderBottomColor: borderColor
  };

  return (
    <section id={sectionId} style={sectionStyle}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 style={titleStyle}>{title}</h1>
          <p className="hero-description">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}