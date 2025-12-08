import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./Hero.css";

function Hero() {
  const { t } = useLanguage();
  const sportsImages = [
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&q=80",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&q=80",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80",
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sportsImages.length);
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(interval);
  }, [sportsImages.length]);

  return (
    <section className="hero-section">
      <div className="hero-images-container">
        {sportsImages.map((image, index) => (
          <div
            key={index}
            className={`hero-image-wrapper ${
              index === currentIndex ? "active" : ""
            } ${index < currentIndex ? "prev" : "next"}`}
          >
            <img
              src={image}
              alt={`Sports ${index + 1}`}
              className="hero-background-image"
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-description">{t.hero.description}</p>
          <button className="hero-cta-button">{t.hero.button}</button>
        </div>
      </div>
      <div className="hero-indicators">
        {sportsImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
