import { ActionType, Action } from '../actions/repositories.actions'

export interface State {
  readonly loading: boolean;
  readonly error: string | null;
  readonly data: string[];
}

const initialState: State = {
  loading: false,
  error: null,
  data: []
}

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}