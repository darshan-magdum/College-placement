import React from 'react';

function Loader() {
  return (
    <div className="container" style={containerStyle}>
      <div className="loading-wave" style={loadingWaveStyle}>
        <div className="loading-bar" style={{ ...loadingBarStyle, animationDelay: '0s' }}></div>
        <div className="loading-bar" style={{ ...loadingBarStyle, animationDelay: '0.1s' }}></div>
        <div className="loading-bar" style={{ ...loadingBarStyle, animationDelay: '0.2s' }}></div>
        <div className="loading-bar" style={{ ...loadingBarStyle, animationDelay: '0.3s' }}></div>
      </div>
      <style>
        {`
          @keyframes loading-wave-animation {
            0% { height: 10px; }
            50% { height: 50px; }
            100% { height: 10px; }
          }
        `}
      </style>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

const loadingWaveStyle = {
  width: '300px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
};

const loadingBarStyle = {
  width: '20px',
  height: '10px',
  margin: '0 5px',
  backgroundColor: '#3498db',
  borderRadius: '5px',
  animation: 'loading-wave-animation 1s ease-in-out infinite',
};

export default Loader;
