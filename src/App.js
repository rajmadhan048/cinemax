import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // Navbar import pannirukom
import MovieRow from './components/MovieRow';
import MovieDetailsModal from './components/MovieDetailsModal';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = 'a234bb37'; // Ungaloda real OMDb key potruka

  useEffect(() => {
    const fetchDefaultCategories = async () => {
      try {
        const actionRes = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=action`);
        const actionData = await actionRes.json();
        if (actionData.Search) setActionMovies(actionData.Search);

        const comedyRes = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=comedy`);
        const comedyData = await comedyRes.json();
        if (comedyData.Search) setComedyMovies(comedyData.Search);
      } catch (err) {
        console.error("Error fetching movies", err);
      }
    };

    fetchDefaultCategories();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      const data = await response.json();
      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error("Search error", err);
    }
  };

  return (
    <div className="app-container">
      {/* Separate Navbar Component used here */}
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onSearch={handleSearch} 
      />

      <div style={{ padding: '20px' }}>
        {searchResults.length > 0 ? (
          <MovieRow title={`Search Results for "${searchTerm}"`} movies={searchResults} onSelectMovie={setSelectedMovie} />
        ) : (
          <>
            <MovieRow title="🔥 Action Blockbusters" movies={actionNames => actionMovies} moviesList={actionMovies} onSelectMovie={setSelectedMovie} />
            <MovieRow title="🔥 Action Blockbusters" movies={actionMovies} onSelectMovie={setSelectedMovie} />
            <MovieRow title="😂 Comedy Hits" movies={comedyMovies} onSelectMovie={setSelectedMovie} />
          </>
        )}
      </div>

      <MovieDetailsModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default App;