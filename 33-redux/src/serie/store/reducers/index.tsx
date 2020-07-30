export interface IAction {
  type: string,
  payload: any
}

export interface IState {
  episodes: Array<any>,
  favourites: Array<any>
};

export const initialState: IState = {
  episodes: [],
  favourites: []
}

export function reducer(state: IState, action: IAction): IState {

  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    case 'ADD_FAV':
      return { ...state, favourites: [...state.favourites, action.payload] }
    case 'REM_FAV':
      return { ...state, favourites: action.payload }
    default:
      return state;
  }

}