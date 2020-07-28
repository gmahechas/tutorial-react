import React, { lazy, useContext, useEffect, Suspense } from 'react'

import { IAction } from './store/reducers'
import { Store } from './store/SerieStore';

const EpisodesList = lazy(() => import('./store/EpisodesList'));

function Serie() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  })

  const fetchDataAction = async (): Promise<IAction> => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  };

  const toggleFavAction = (episode: any): IAction => {
    const episodeInFav = state.favourites.includes(episode);

    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter((fav: any) => fav.id !== episode.id);
      return dispatch({
        type: 'REM_FAV',
        payload: favWithoutEpisode
      })
    } else {
      return dispatch({
        type: 'ADD_FAV',
        payload: episode
      })
    }

  }

  const props = {
    episodes: state.episodes,
    favourites: state.favourites,
    toggleFavAction
  };

  return (
    <div>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!!</p>
      <p>Favourite(s): {state.favourites.length}</p>
      <section>
        <Suspense fallback={<div>loading...</div>}>
          <EpisodesList {...props} />
        </Suspense>
      </section>
    </div>
  )
}

export default Serie;
