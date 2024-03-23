import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import './index.css';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}`);
      const data = await response.json();
      setPokemonList(data.data);
      setTotalPages(data.totalPages);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pokedex">
      <div className="language-pagination-container">
        <div className="language-selector">
          <button onClick={() => handleLanguageChange('english')}>English</button>
          <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
          <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
          <button onClick={() => handleLanguageChange('french')}>French</button>
        </div>
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Back
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i + 1} onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <>
          {pokemonList.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
          ))}
        </>
      )}
    </div>
  );
};

export default Pokedex;
