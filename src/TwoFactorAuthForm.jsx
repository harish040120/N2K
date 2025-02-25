import React, { useState, useEffect } from 'react';

const TwoFactorAuthForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('6379470943');
  const [otp, setOtp] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [message, setMessage] = useState('');
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [dbStatus, setDbStatus] = useState('Checking...');

  // Check if backend is running when component mounts
  useEffect(() => {
    checkBackendStatus();
    checkDatabaseConnection();
  }, []);

  // Function to check if backend is running
  const checkBackendStatus = async () => {
    try {
      const response = await fetch('/');
      if (response.ok) {
        setBackendStatus('Backend is running ✅');
      } else {
        setBackendStatus('Backend is not responding properly ❌');
      }
    } catch (error) {
      setBackendStatus('Backend is not running ❌');
    }
  };

  // Function to check database connection
  const checkDatabaseConnection = async () => {
    try {
      const response = await fetch('/api/testdb');
      const data = await response.json();
      if (data.message === 'Database connection successful!') {
        setDbStatus('Database connection successful ✅');
      } else {
        setDbStatus('Database connection failed ❌');
      }
    } catch (error) {
      setDbStatus('Failed to check database connection ❌');
    }
  };

  const sendOtp = async () => {
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await response.json();
      if (data.success) {
        setSessionId(data.details);
        setMessage('OTP sent successfully!');
      } else {
        setMessage('Failed to send OTP.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId, otpInput: otp }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Phone number verified successfully!');
      } else {
        setMessage('Invalid OTP.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  return (
    <div className="two-factor-auth-container">
      <h2>Two-Factor Authentication</h2>
      
      <div className="status-container">
        <p><strong>Backend Status:</strong> {backendStatus}</p>
        <p><strong>Database Status:</strong> {dbStatus}</p>
        <button onClick={() => { checkBackendStatus(); checkDatabaseConnection(); }}>
          Refresh Status
        </button>
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          disabled // Disable the input field to prevent changes
        />
        <button onClick={sendOtp}>Send OTP</button>
      </div>

      <div className="form-group">
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={verifyOtp}>Verify OTP</button>
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default TwoFactorAuthForm;