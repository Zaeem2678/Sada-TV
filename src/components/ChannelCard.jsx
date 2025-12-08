import './ChannelCard.css';

function ChannelCard({ channel, index = 0 }) {
  const handleClick = () => {
    if (channel.link) {
      window.open(channel.link, '_blank', 'noopener,noreferrer');
    }
  };

  // Different gradient colors for variety
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <div 
      className="channel-card" 
      onClick={handleClick}
      style={{ '--card-gradient': gradient }}
    >
      <div className="card-glow"></div>
      <div className="channel-card-inner">
        <div className="channel-card-image-container">
          <div className="image-wrapper">
            <img 
              src={channel.logo} 
              alt={channel.name} 
              className="channel-card-logo"
              onError={(e) => {
                e.target.src = '/vite.svg';
              }}
            />
          </div>
        </div>
        <div className="channel-card-content">
          <h3 className="channel-card-name">{channel.name}</h3>
          <div className="card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelCard;
