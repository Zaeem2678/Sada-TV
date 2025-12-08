import { useLanguage } from "../contexts/LanguageContext";
import "./Cards.css";

function Cards() {
  const { t } = useLanguage();

  const cardData = [
    {
      id: 1,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s8.jpeg",
      link: null,
    },
    {
      id: 2,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s7.jpeg",
      link: "https://stream.addresses-sat.com/Sada_Alquran/index.m3u8", // Add link when available
    },
    {
      id: 3,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s10.jpeg",
      link: "https://stream.addresses-sat.com/Sada_Samar/index.m3u8", // Add link when available
    },
    {
      id: 4,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s9.jpeg",
      link: null, // Add link when available
    },
    {
      id: 5,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s6.jpeg",
      link: null, // Add link when available
    },
    {
      id: 6,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s5.jpeg",
      link: "https://stream.addresses-sat.com/Sada_iqtsadya/index.m3u8", // Add link when available
    },
    {
      id: 7,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s3.jpeg",
      link: "https://stream.addresses-sat.com/Sada_almalab/index.m3u8", // Add link when available
    },
    {
      id: 8,
      image: "https://sadaa.tv/wp-content/uploads/2025/05/s4.jpeg",
      link: "https://stream.addresses-sat.com/Sada_Alsehha/index.m3u8", // Add link when available
    },
  ];

  const handleCardClick = (link) => {
    if (link) {
      // For m3u8 streaming links, open in a new window or navigate to player
      // You can customize this behavior based on your needs
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const getCardText = (id) => {
    switch (id) {
      case 1:
        return t.cards.card1;
      case 2:
        return t.cards.card2;
      case 3:
        return t.cards.card3;
      case 4:
        return t.cards.card4;
      case 5:
        return t.cards.card5;
      case 6:
        return t.cards.card6;
      case 7:
        return t.cards.card7;
      case 8:
        return t.cards.card8;
      default:
        return "";
    }
  };

  return (
    <section className="cards-section">
      <div className="cards-container">
        <div className="cards-grid">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card.link)}
              style={{ cursor: card.link ? "pointer" : "default" }}
            >
              <div className="card-image-wrapper">
                <img
                  src={card.image}
                  alt={getCardText(card.id)}
                  className="card-image"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <p className="card-text">{getCardText(card.id)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
