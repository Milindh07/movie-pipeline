import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MOVIE_API_URL;

    if (!apiUrl) {
      setError('Movie API URL is not configured.');
      setLoading(false);
      return;
    }

    axios
      .get(`${apiUrl.replace(/\/+$/, '')}/movies`)
      .then((response) => {
        const movieData = response.data?.movies;

        if (!Array.isArray(movieData)) {
          throw new Error('Unexpected API response format.');
        }

        setMovies(movieData);
      })
      .catch((err) => {
        console.error('Error loading movies:', err);
        setError('Unable to load movies. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li
          className="movieItem"
          key={movie.id}
          onClick={() => onMovieClick(movie)}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
