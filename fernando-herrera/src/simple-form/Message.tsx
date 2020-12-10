import React, { useEffect } from 'react'

const Message = () => {
  useEffect(() => {
    console.log('Mount Message')
    return () => {
      console.log('Unmount Message');
    }
  },[])
  return <div>You're Great</div>;
}

export default Message
