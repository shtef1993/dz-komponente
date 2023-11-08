import React from 'react';

function FunctionComponentWithChildren({ ime, godine, children }) {
  return (
    <div>
      <p>Ime: {ime}</p>
      <p>Godine: {godine}</p>
      <div>{children}</div>
    </div>
  );
}

export default FunctionComponentWithChildren;
