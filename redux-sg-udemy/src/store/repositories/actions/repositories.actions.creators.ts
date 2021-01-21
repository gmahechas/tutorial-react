import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionType, Action } from './repositories.actions'

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })

    try {
      const { data } = await axios.get('https://registry.npmjs.com/-/v1/search', {
        params: {
          text: term
        }
      });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message
      })
    }
  }
}