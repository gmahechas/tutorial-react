import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
  { id: new Date().getTime(), desc: 'Aprendiendo React', done: false },
];

function init(initialState: any) {
  return initialState;
}

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState, init);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type='text' name='description'></input>
        <button type='submit'>Agregar</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, i) => (
          <li key={todo.id}>
            {i + 1}. {todo.desc} <button>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
