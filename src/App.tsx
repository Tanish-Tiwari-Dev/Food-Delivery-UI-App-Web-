import { useState } from 'react';
import './index.css';
import './App.css';
import Splash from './components/Splash';
import Auth from './components/Auth';
import OTP from './components/OTP';
import Home from './components/Home';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <Splash onNavigate={setCurrentScreen} />;
      case 'auth':
        return <Auth onNavigate={setCurrentScreen} />;
      case 'otp':
        return <OTP onNavigate={setCurrentScreen} />;
      case 'home':
        return <Home onNavigate={setCurrentScreen} />;
      default:
        return <Splash onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
    </div>
  );
}

export default App;
