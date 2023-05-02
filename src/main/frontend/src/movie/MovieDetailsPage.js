import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Director</th>
          <th>Genre</th>
          <th>Star Names</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
          <tr key={movie.id}>
            <td>
              <Link 
                to={`/movie/${movie.id}`}
                style={{ 
                  textDecoration: 'none',
                  color: 'blue'
                  }}>
                {movie.title}
              </Link>
            </td>
            <td>{movie.year}</td>
            <td>{movie.director}</td>
            <td>{movie.genre}</td>
            <td>
              {movie.stars.map((star, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ', '}
                  <Link
                    to={`https://example.com/stars/${star.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'blue'
                    }}
                  >
                    {star.name}
                  </Link>
                </React.Fragment>
              ))}
            </td>
            <td>{movie.rating}</td>
          </tr>
      </tbody>
    </table>
  );
};

export default MovieDetailsPage;
