import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';
import { MOVIES_ENDPOINT } from '../apiEndpoints';

const Movie = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(MOVIES_ENDPOINT)
    // axios.get('http://springboot-env.eba-uprqgxvp.us-east-1.elasticbeanstalk.com/api/movies')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.year}</p>
          <p>{item.director}</p>
        </div>
      ))} */}
        <h1>Movie List</h1>
      {data.map(item => (
        <div>
          <Card 
            title={item.title} 
            year={item.year} 
            director={item.director} 
          />
        </div>
      ))}
    </div>
  );
}

export default Movie;
