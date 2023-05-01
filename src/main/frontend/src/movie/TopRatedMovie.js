import React from 'react';

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
              <a href={`https://example.com/movies/${movie.id}`} style={{ textDecoration: 'none' }}>{movie.title}</a>
            </td>
            <td>{movie.year}</td>
            <td>{movie.director}</td>
            <td>{movie.genre}</td>
            <td>
              {movie.star_name.split(',').map((star, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ', '}
                  <a href={`https://example.com/stars/${star}`} style={{ textDecoration: 'none' }}>{star}</a>
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
