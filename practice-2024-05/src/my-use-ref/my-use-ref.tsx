import { useRef } from 'react';

const MyUseRef = () => {
	const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
	
	return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
	)
}

export default MyUseRef