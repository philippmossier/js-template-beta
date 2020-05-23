import React from 'react';

const TestButton = ({ className }) => (
  <button type="button" className={`${className} bg-red-500 text-white py-2 px-4 rounded-md shadow-md`}>Submit</button>
);

export default TestButton;
