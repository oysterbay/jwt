import React, {useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";
import { Pagination } from "@mui/lab";
import axios from 'axios';
import Card from './Card';
import { MOVIES_ENDPOINT } from '../apiEndpoints';
import { MOVIES_PAGINATION_ENDPOINT } from '../apiEndpoints';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies();
  }, [page, pageSize]);

  const fetchMovies = async () => {
    const response = await axios.get(MOVIES_PAGINATION_ENDPOINT(page-1, pageSize))
    // const response = await axios.get(`http://localhost:5000/api/items?pageNumber=${page - 1}&pageSize=${pageSize}`);
    // const response = await axios.get(`http://springboot-env.eba-uprqgxvp.us-east-1.elasticbeanstalk.com/api/items?pageNumber=${page - 1}&pageSize=${pageSize}`);
    setMovies(response.data.content);
    setTotalPages(response.data.totalPages);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangePageSize = (event) => {
    setPageSize(parseInt(event.target.value));
    setPage(1);
  };

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map(item => (
        <div>
          <Card 
            title={item.title} 
            year={item.year} 
            director={item.director} 
          />
        </div>
      ))}
      <TablePagination
        component="div"
        count={totalPages * pageSize}
        page={page - 1}
        onPageChange={handleChangePage}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangePageSize}
        rowsPerPageOptions={[5, 10, 20]}
      />
      <Pagination count={totalPages} page={page} onChange={handleChangePage} sx={{ marginTop: 2 }} />
    </div>
  );
}

export default Movie;
