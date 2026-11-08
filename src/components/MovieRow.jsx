import React from 'react';

function MovieRow({ title, movies, onSelectMovie }) {
  return (
    <div className="movie-row-container">
      <h2 className="row-title">{title}</h2>
      <div className="movie-scroll">
        {Array.isArray(movies) && movies.map((movie) => (
          <div 
            key={movie.imdbID}
            className="movie-card"
            onClick={() => onSelectMovie(movie)}
          >
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} 
              alt={movie.Title} 
              className="movie-poster"
            />
            <div className="movie-info">
              <p className="movie-title">{movie.Title}</p>
              <p className="movie-year">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;