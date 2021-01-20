import React, { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Dios', age: 3237263783 },
  { name: 'Jesus', age: 3237263783 },
  { name: 'Alexandra', age: 32 },
];

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    } 
    inputRef.current.focus();
  }, []);
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
