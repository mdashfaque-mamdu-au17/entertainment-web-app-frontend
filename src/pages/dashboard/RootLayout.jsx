import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <div>
      <h3>Header</h3>
      {children}
    </div>
  );
};

export default RootLayout;
