# Quick Start Guide

## 1. Install Dependencies
```bash
npm install
```

## 2. Start Development Server
```bash
npm start
```

## 3. Test the Login Page

### Valid Input:
- **Email**: `user@example.com`
- **Password**: `password123`

### What to Try:
1. Leave fields empty and click Login → See required field errors
2. Enter invalid email (e.g., `notanemail`) → See email format error
3. Enter password with less than 6 characters → See minimum length error
4. Enter valid email and password → See success message
5. Test blur validation → Errors appear when leaving a field
6. Start typing corrections → Errors disappear automatically

## Form Validation Features:
✅ Real-time validation on field blur
✅ Live error clearing as you type
✅ Complete form validation on submit
✅ Clear error messages
✅ Disabled state during submission
✅ Remember me checkbox
✅ Forgot password link
✅ Sign up link

## File Structure:
- `src/components/LoginPage.js` - Main login component with validation logic
- `src/utils/ValidationHelper.js` - Email and password validation utilities
- `src/styles/LoginPage.css` - Styling with animations
- `package.json` - Dependencies and scripts

Enjoy your lab assignment! 🚀
