import React from 'react';
import { Apple, Smartphone } from 'lucide-react'; // Simulating generic social icons

interface Props {
  onNavigate: (screen: string) => void;
}

const Auth: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="auth-screen">
      <div className="auth-header">
        <h1>Login to RK Pure Veg</h1>
        <p>Enter your phone number to continue</p>
      </div>

      <div className="auth-form">
        <div className="input-group">
          <span style={{ marginRight: '8px' }}>🇮🇳 +91</span>
          <input 
            type="tel" 
            className="input-field" 
            placeholder="Enter Phone No." 
          />
        </div>
        
        <button className="btn btn-primary" onClick={() => onNavigate('otp')}>
          Get OTP
        </button>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <input type="checkbox" id="remember" style={{ marginRight: '8px' }} />
          <label htmlFor="remember" style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
            Remember my login for faster sign-in
          </label>
        </div>
      </div>

      <div className="auth-divider">Or continue with</div>

      <div className="social-login">
        <button className="social-btn">
          <Smartphone size={20} />
        </button>
        <button className="social-btn">
          <Apple size={20} />
        </button>
      </div>
      
      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
         <button className="btn btn-secondary" onClick={() => onNavigate('splash')} style={{ marginTop: '24px' }}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Auth;
