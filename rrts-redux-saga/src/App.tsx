import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './store/selectors';
import * as fromActions from './store/actions/todo.actions';

function App() {
  const dispatch = useDispatch();
  const { todos, error, loading } = useTypedSelector((state) => state.todos);

  const onClickFetch = () => {
    dispatch(fromActions.fetchTodos());
  };
  const renderList = () => {
    return todos.map((todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };

  return (
    <div>
      <button onClick={onClickFetch}>Fetch</button>
      <div>{loading && 'Cargando'}</div>
      <div>{error && error}</div>
      <hr />
      {renderList()}
    </div>
  );
}

export default App;
