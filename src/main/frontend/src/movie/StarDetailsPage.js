import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { STAR_DETAILS_ENDPOINT } from '../apiEndpoints';

const StarDetailsPage = () => {

  const { id } = useParams();
  const [star, setStar] = useState(null);

  console.log("ID: ", id)

  const endpoint = STAR_DETAILS_ENDPOINT(id);
  console.log("end point: "+ endpoint);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
        console.log("end point: " + endpoint);
      const response = await axios.get(endpoint);
      
      setStar(response.data);
      console.log("daasdfa: ", response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  if (!star) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Movies</th>
        </tr>
      </thead>
      <tbody>
          <tr key={star.id}>
            <td>
              <Link 
                to={`/star/${star.id}`}
                style={{ 
                  textDecoration: 'none',
                  color: 'blue'
                  }}>
                {star.name}
              </Link>
            </td>
            <td>{star.dob}</td>
            <td>
              {star.movies.map((movie, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ', '}
                  <Link
                    to={`/movie/${movie.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'blue'
                    }}
                  >
                    {movie.name}
                  </Link>
                </React.Fragment>
              ))}
            </td>
          </tr>
      </tbody>
    </table>
  );
}

export default StarDetailsPage;