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
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.director}</td>
            <td>{movie.genre}</td>
            <td>{movie.star_name}</td>
            <td>{movie.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopRatedMovie;
