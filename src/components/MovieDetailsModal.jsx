import React from 'react';

function MovieDetailsModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} 
          alt={movie.Title} 
          className="modal-poster"
        />
        <div className="modal-details">
          <h2>{movie.Title} ({movie.Year})</h2>
          <p><strong>Type:</strong> {movie.Type}</p>
          <p><strong>IMDb ID:</strong> {movie.imdbID}</p>
          <p style={{ marginTop: '15px', color: '#ccc' }}>
            Explore related cinematic universes! Perfect for your React project presentation and component demonstration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;