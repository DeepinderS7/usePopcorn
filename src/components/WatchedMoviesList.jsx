export default function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbId}>
          <img src={movie.poster} alt={`${movie.title} poster`} />
          <h3>{movie.title}</h3>
          <div>
            <p>
              <span aria-label="imdb rating">⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span aria-label="your rating">🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span aria-label="runtime">⏳</span>
              <span>{movie.runtime} min</span>
            </p>

            <button
              className="btn-delete"
              onClick={() => onDeleteWatched(movie.imdbId)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
