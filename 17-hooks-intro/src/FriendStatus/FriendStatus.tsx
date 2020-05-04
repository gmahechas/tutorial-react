import React, { useState, useEffect } from 'react';

export default function FriendStatus(props: any) {

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  function handleStatusChange(status: any) {
    setIsOnline(status.isOnline);
  }
  useEffect(() => {
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        {isOnline ? 'Online' : 'Offline'}
      </div>
    )
  }

}
