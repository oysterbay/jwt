import React from 'react';
import { Link } from 'react-router-dom';

const TopRatedMovie = ({ movies }) => {
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
        {movies.map((movie) => (
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
              {movie.star_name.split(',').map((star, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ', '}
                  <Link 
                    to={`https://example.com/stars/${star}`}
                    style={{ 
                      textDecoration: 'none',
                      color: 'blue'
                      }}>
                    {star}
                  </Link>
                </React.Fragment>
              ))}
            </td>
            <td>{movie.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopRatedMovie;
