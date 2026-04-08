// Validation helper utilities
const ValidationHelper = {
  // Email validation regex pattern
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Password validation (minimum 6 characters)
  isValidPassword: (password) => {
    return password.length >= 6;
  },

  // Check if field is empty
  isEmpty: (value) => {
    return !value || value.trim() === '';
  }
};

export default ValidationHelper;
