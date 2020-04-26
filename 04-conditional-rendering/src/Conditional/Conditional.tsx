import React from 'react'

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props: any) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


class Conditional extends React.Component {
  render() {
    return (
      <Greeting isLoggedIn={false} />
    )
  }
}

export default Conditional;
