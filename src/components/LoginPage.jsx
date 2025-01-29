import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      // Handle login
      if (credentials.username && credentials.password) {
        navigate('/dashboard');
      }
    } else {
      // Handle signup
      if (credentials.password === credentials.confirmPassword) {
        navigate('/dashboard');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="auth-buttons">
        <button 
          className={`auth-button ${isLoginForm ? 'active' : ''}`}
          onClick={() => setIsLoginForm(true)}
          type="button"
        >
          Login
        </button>
        <button 
          className={`auth-button ${!isLoginForm ? 'active' : ''}`}
          onClick={() => setIsLoginForm(false)}
          type="button"
        >
          Sign Up
        </button>
      </div>
      <h1 className="login-title">Pinky's Diary</h1>
      <div className="login-box">
        <div className="login-switch">
          <p>
            Already have an account? 
            <span 
              className="login-link" 
              onClick={() => setIsLoginForm(true)}
            >
              Login
            </span>
            <span className="signup-link" onClick={() => setIsLoginForm(false)}>
              Sign Up
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          
          {!isLoginForm && (
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={credentials.email}
                onChange={handleChange}
                required={!isLoginForm}
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          {!isLoginForm && (
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={credentials.confirmPassword}
                onChange={handleChange}
                required={!isLoginForm}
              />
            </div>
          )}

          <button type="submit">
            {isLoginForm ? 'Login' : 'Sign Up'}
          </button>
          
          <div className="form-footer">
            {!isLoginForm && (
              <>
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                
                <button 
                  type="button" 
                  className="terms-button"
                  onClick={() => setShowTerms(true)}
                >
                  Terms & Conditions
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="terms-modal">
          <div className="terms-content">
            <h2>Terms and Conditions</h2>
            <div className="terms-text">
              <p>1. By using our service, you agree to maintain the confidentiality of your account.</p>
              <p>2. Users must not share inappropriate or harmful content.</p>
              <p>3. We reserve the right to terminate accounts that violate our terms.</p>
              <p>4. Your personal information will be handled according to our privacy policy.</p>
              <p>5. The service is provided "as is" without warranties of any kind.</p>
            </div>
            <button onClick={() => setShowTerms(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage; 