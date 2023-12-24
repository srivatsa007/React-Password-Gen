// PasswordStrengthIndicator.js
import React from 'react';

const PasswordStrengthIndicator = ({ password }) => {
  const calculateStrength = () => {
    const strength = calculatePasswordStrength(password);
    return strength;
  };

  const calculatePasswordStrength = (password) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+{}|:"<>?-=[];,./';

    let strength = 0;

    if (password.length >= 8) {
      strength++;
    }
    if (containsChars(password, chars)) {
      strength++;
    }
    if (containsChars(password, chars.toUpperCase())) {
      strength++;
    }
    if (containsChars(password, numbers)) {
      strength++;
    }
    if (containsChars(password, symbols)) {
      strength++;
    }

    return strength;
  };

  const containsChars = (password, charSet) => {
    for (let char of charSet) {
      if (password.includes(char)) {
        return true;
      }
    }
    return false;
  };

  const passwordStrength = calculateStrength();
////
  const renderStrengthBoxes = () => {
    const strengthLevels = ['(╥﹏╥)ugh...', ':( Bad', '._. Average, meh...', '(⸝⸝ᵕᴗᵕ⸝⸝) Good length!', '( ◡̀_◡́)ᕤ Strong !!'];

    return (
      <div className="strength-indicator">
        {strengthLevels.map((level, index) => (
          <div
            key={index}
            className={`${ index === passwordStrength - 1 ? 'active' : 'hidden'}`}
            style={{
                display: index === passwordStrength - 1 ? 'block' : 'none',
              }}
            >
            {level}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* <h3>Password Strength</h3> */}
      {renderStrengthBoxes()}
    </div>
  );
};

export default PasswordStrengthIndicator;
