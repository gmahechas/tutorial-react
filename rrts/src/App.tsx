import React, { FC } from 'react';

import { connect } from 'react-redux';
import * as fromEffects from './store/effects';
import { ITodo } from './models/todo.model';
import { RootState } from './store/reducers';

interface IProps {
  todos: ITodo[];
  fetchTodos: Function;
  deleteTodo: typeof fromEffects.deleteTodo;
}

const _App: FC<IProps> = ({ todos, fetchTodos, deleteTodo }) => {

  const onClickFetch = () => {
    fetchTodos();
  };

  const onClickDelete = (id: number) => {
    deleteTodo(id);
  };

  const renderList = () => {
    return todos.map((todo) => {
      return (
        <div key={todo.id} onClick={() => onClickDelete(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={onClickFetch}>Fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos: { todos } }: RootState) => {
  return {
    todos,
  };
};

export const App = connect(mapStateToProps, fromEffects)(_App);
