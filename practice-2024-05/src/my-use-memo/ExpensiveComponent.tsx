import React from 'react';

interface ExpensiveComponentProps {
  value: number;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({ value }) => {
  console.log('Rendering ExpensiveComponent');
  for (let i = 0; i < 1000; i++) {}
  return <div>Expensive Component Value: {value}</div>;
};

export default ExpensiveComponent;
