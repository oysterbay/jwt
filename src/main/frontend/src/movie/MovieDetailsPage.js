import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SINGLE_MOVIE_DETAILS_ENDPOINT } from '../apiEndpoints';

const MovieDetailsPage = () => {


  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  console.log("ID: ", id)

  const endpoint = SINGLE_MOVIE_DETAILS_ENDPOINT(id);
  console.log("end point: "+ endpoint);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
        console.log("end point: " + endpoint);
      const response = await axios.get(endpoint);
      
      setMovie(response.data);
      console.log("daasdfa: ", response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Year: {movie.year}</p>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.rating}</p>
      <p>Star Names: {movie.star_name}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
};

export default MovieDetailsPage;
