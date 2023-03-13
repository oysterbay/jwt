import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Movie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
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
