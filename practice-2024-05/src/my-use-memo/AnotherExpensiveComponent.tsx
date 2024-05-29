import React from 'react';

interface AnotherExpensiveComponentProps {
  value: number;
}

const AnotherExpensiveComponent: React.FC<AnotherExpensiveComponentProps> = ({ value }) => {
  console.log('Rendering AnotherExpensiveComponent');
  for (let i = 0; i < 1000000000; i++) {} // Simulación de una operación costosa
  return <div>Another Expensive Component Value: {value}</div>;
};

export default AnotherExpensiveComponent;
