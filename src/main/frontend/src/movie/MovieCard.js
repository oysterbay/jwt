import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MovieCard = ({ title, year, director }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Director: {director}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
