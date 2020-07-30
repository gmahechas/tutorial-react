import React from 'react'

function EpisodesList(props: any) {
  const { episodes, favourites, toggleFavAction } = props;
  return (
    <div>
      {episodes.map((episode: any) => {
        return (
          <section key={episode.id} style={{ float: 'left' }}>
            <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
            <div>{episode.name}</div>
            <section style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Section: {episode.season} Number: {episode.number}</div>
              <button type="button" onClick={() => toggleFavAction(episode)}>
                {favourites.find((fav: any) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
              </button>
            </section>
          </section>
        )
      })}
    </div>
  )
}

export default EpisodesList;
