// PasswordGenerator.js

import React, { useState } from 'react';
import PasswordStrengthIndicator from './PasswordStrength';
import CopyToClipboard from './Copy';
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(parseInt(e.target.value));
  };

  const handleIncludeNumbers = (e) => {
    setIncludeNumbers(e.target.checked);
  };

  const handleIncludeSpecialChars = (e) => {
    setIncludeSpecialChars(e.target.checked);
  };

  const generatePassword = () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+{}|:"<>?-=[];,./';

    let allChars = chars;
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    setPassword(generatedPassword);
  };
  const passwordToShow = showPassword ? password : '•'.repeat(password.length);

  return (
    <div className="password-generator flex flex-col absolute align-middle justify-center">
      
      
      <div className="options">
      <div className="box1">
            <div className="password-input">
                <input
                className='pdisplay border-radius-5 bg-color-red'
                type={showPassword ? 'text' : 'password'}
                value={passwordToShow}
                onChange={handlePasswordChange}
                />
                <button onClick={togglePasswordVisibility}>
                        {showPassword ? <PiEyeClosedBold /> : <PiEyeBold />}
                </button>
                <CopyToClipboard password={password} />
            </div>
            <PasswordStrengthIndicator password={password} />

      </div>
        <div className='slider'>
                <label htmlFor="passwordLength">Set Length:</label>
                <div className='slider-inner'>
                        <input
                        type="range"
                        id="passwordLength"
                        name="passwordLength"
                        min="6"
                        max="24"
                        value={passwordLength}
                        onChange={handlePasswordLengthChange}
                        />
                        <span>{passwordLength}</span>
                </div>
                
        </div>
        
        <div className="checkboxes">
          <label htmlFor="includeNumbers">
            <input
              type="checkbox"
              id="includeNumbers"
              name="includeNumbers"
              checked={includeNumbers}
              onChange={handleIncludeNumbers}
            />
            Include Numbers
          </label>
          <label htmlFor="includeSpecialChars">
            <input
              type="checkbox"
              id="includeSpecialChars"
              name="includeSpecialChars"
              checked={includeSpecialChars}
              onChange={handleIncludeSpecialChars}
            />
            Include Special Characters
          </label>
        </div>
      </div>
      
      {/* ////// */}
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
