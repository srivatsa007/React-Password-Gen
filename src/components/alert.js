
import React from 'react';

const AlertMessage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 99,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        padding: '5px 10px',
        borderRadius: '4px',
      }}
    >
      Copied successfully!
    </div>
  );
};

export default AlertMessage;
