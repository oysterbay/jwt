import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { MOVIES_SEARCH_ENDPOINT } from '../apiEndpoints';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // handle search query change
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // handle search form submission
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      // call fuzzy search API with the search query using Axios
      // const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
      const response = await axios.get(MOVIES_SEARCH_ENDPOINT(query))
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <TextField label="Search movies" value={query} onChange={handleQueryChange} />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      <List>
        {results.map((movie) => (
          <ListItem key={movie.id}>
            <ListItemText primary={movie.title} secondary={`Released in ${movie.year}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MovieSearch;
