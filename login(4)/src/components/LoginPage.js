import React, { useState } from 'react';
import '../styles/LoginPage.css';
import ValidationHelper from '../utils/ValidationHelper';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    // Validate field on blur
    validateField(name, formData[name]);
  };

  // Validate single field
  const validateField = (name, value) => {
    let error = '';

    if (name === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!ValidationHelper.isValidEmail(value)) {
        error = 'Please enter a valid email address';
      }
    }

    if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 6) {
        error = 'Password must be at least 6 characters';
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));

    return !error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!ValidationHelper.isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted:', formData);

      // Simulate login success
      alert(`Welcome, ${formData.email}! You have been logged in successfully.`);

      // Reset form
      setTimeout(() => {
        setFormData({ email: '', password: '', rememberMe: false });
        setErrors({});
        setTouched({});
        setSubmitted(false);
      }, 1000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Login</h1>
          <p>Welcome back! Please login to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="Enter your email"
              disabled={submitted}
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.password ? 'input-error' : ''}`}
              placeholder="Enter your password"
              disabled={submitted}
            />
            {errors.password && touched.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={submitted}
              />
              <span>Remember me</span>
            </label>
            <a href="#forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
            disabled={submitted}
          >
            {submitted ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="signup-section">
          <p>
            Don't have an account?{' '}
            <a href="#signup" className="signup-link">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
