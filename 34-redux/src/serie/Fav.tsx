import React, { useContext } from 'react'

import { Store } from './store/SerieStore';

function Fav() {
  
  const { state } = useContext(Store);

  return (
    <div>
      {state.favourites.map((episode: any) => {
        return (
          <section key={episode.id} style={{ float: 'left' }}>
            <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
            <div>{episode.name}</div>
            <section style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Section: {episode.season} Number: {episode.number}</div>
            </section>
          </section>
        )
      })}
    </div>
  )
}

export default Fav;
