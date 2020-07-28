import React, { Fragment, useState } from 'react';

function UseState() {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(e.target)
    setValue('')
  }
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  );
}

export default UseState;
