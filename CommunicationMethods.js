import React, { useState } from 'react';

const CommunicationMethods = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', mandatory: true },
    { name: 'LinkedIn Message', mandatory: true },
  ]);

  const handleAddMethod = () => {
    const newMethod = { name: '', mandatory: false };
    setMethods([...methods, newMethod]);
  };

  return (
    <div className="admin-module">
      <h2>Communication Methods</h2>
      {methods.map((method, index) => (
        <div key={index}>
          <span>{method.name}</span>
        </div>
      ))}
      <button onClick={handleAddMethod}>Add Method</button>
    </div>
  );
};

export default CommunicationMethods;
