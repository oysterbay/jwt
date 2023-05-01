import './App.css';
import TopRatedMoviePage from './movie/TopRatedMoviePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from './movie/MovieDetailsPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopRatedMoviePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
