import React from 'react';

function ListItem(props: any) {
  return <li>{props.value}</li>;
}

function NumberList(props: any) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number: number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}

export default NumberList;