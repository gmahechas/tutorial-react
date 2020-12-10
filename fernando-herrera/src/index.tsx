import React from 'react';
import ReactDOM from 'react-dom';

/* import CounterApp from './apps/counter-app/CounterApp'; */
/* import SimpleForm from './apps/simple-form/SimpleForm'; */
/* import SimpleForm2 from './apps/simple-form/SimpleForm2'; */
/* import FocusScreen from './apps/useRefApp/FocusScreen'; */
/* import Memorize from './apps/memo/Memorize'; */
/* import UseMemoApp from './apps/useMemo/UseMemoApp'; */
/* import CallBall from './apps/memo/callback/CallBall'; */
import TodoApp from './apps/TodoApp/TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);