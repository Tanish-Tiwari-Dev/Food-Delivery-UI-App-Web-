import React from 'react';

interface Props {
  onNavigate: (screen: string) => void;
}

const OTP: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="auth-screen">
      <div className="auth-header">
        <h1>OTP Verification</h1>
        <p>Enter the OTP Send on +91 xxxxxxx975</p>
      </div>

      <div className="otp-inputs">
        <input type="text" maxLength={1} className="otp-input" />
        <input type="text" maxLength={1} className="otp-input" />
        <input type="text" maxLength={1} className="otp-input" />
        <input type="text" maxLength={1} className="otp-input" />
      </div>

      <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '24px' }}>
        Did Not Receive OTP? <a href="#" style={{ color: 'var(--color-primary)' }}>Resend Again</a>
      </p>

      <button className="btn btn-primary" onClick={() => onNavigate('home')}>
        Verify
      </button>

      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
         <button className="btn btn-secondary" onClick={() => onNavigate('auth')} style={{ marginTop: '24px' }}>
          Back
        </button>
      </div>
    </div>
  );
};

export default OTP;
