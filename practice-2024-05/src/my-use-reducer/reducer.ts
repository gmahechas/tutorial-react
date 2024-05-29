export interface State {
  count: number;
}

export type Action = 
  | { type: 'increment' }
  | { type: 'decrement' };

export const initialState: State = { count: 0 };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}
