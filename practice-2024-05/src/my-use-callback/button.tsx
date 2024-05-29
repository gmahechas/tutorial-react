import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = React.memo(({ onClick, label }) => {
  console.log(`Rendering Button - ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

export default Button;
