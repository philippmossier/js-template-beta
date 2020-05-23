import React from 'react';

const Button = ({ className }) => (
  <button type="button" className={`${className} bg-teal-500 text-white py-2 px-4 rounded-md shadow-md`}>Submit</button>
);

export default Button;
