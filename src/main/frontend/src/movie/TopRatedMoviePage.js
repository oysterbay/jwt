import React, {useEffect, useState} from 'react';
import TopRatedMovie from './TopRatedMovie';
import axios from 'axios';
import { TOP_RATED_MOVIE } from '../apiEndpoints';

const TopRatedMoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(TOP_RATED_MOVIE);
      setMovies(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <TopRatedMovie movies={movies} />
    </div>
  );
};

export default TopRatedMoviePage;
