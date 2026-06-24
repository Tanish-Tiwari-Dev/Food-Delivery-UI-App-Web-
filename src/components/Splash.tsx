import React from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

const Splash: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="splash-screen">
      <h1 className="splash-brand">Rk Pure Veg</h1>
      
      <div className="splash-actions">
        <button className="btn btn-secondary" onClick={() => onNavigate('home')}>
          As Guest
        </button>
        <button className="btn btn-primary" onClick={() => onNavigate('auth')}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Splash;
