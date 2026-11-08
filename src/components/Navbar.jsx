import React from 'react';

function Navbar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <nav className="navbar">
      <h1 className="nav-title">CINEMAX 🎬</h1>
      <form onSubmit={onSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search movies..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;