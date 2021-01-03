import { RootState } from '../reducers';

export const todos = ({ todos }: RootState) => ({ todos: todos.todos });