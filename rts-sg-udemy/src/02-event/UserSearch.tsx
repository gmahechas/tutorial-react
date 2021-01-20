import React, { useState } from 'react';

const users = [
  { name: 'Dios', age: 3237263783 },
  { name: 'Jesus', age: 3237263783 },
  { name: 'Alexandra', age: 32 },
];

const UserSearch = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
    </div>
  );
};

export default UserSearch;
