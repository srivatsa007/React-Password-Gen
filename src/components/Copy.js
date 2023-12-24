// CopyToClipboard.js
import React, { useState, useEffect } from 'react';
import { IoCopy } from 'react-icons/io5';


const CopyToClipboard = ({ password }) => {
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    };
  
    useEffect(() => {
      let timeoutId;
      if (copied) {
        showAlert();
        timeoutId = setTimeout(() => {
          setCopied(false);
        }, 5000);
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [copied]);
  
    // Function to show the alert message
    const showAlert = () => {
      alert('Copied successfully!');
    };
  
  // Execute showAlert when 'copied' state becomes true
//   if (copied) {
//     showAlert();
//   }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={copyToClipboard}>
        <IoCopy />
      </button>
    </div>
  );
};

export default CopyToClipboard;
