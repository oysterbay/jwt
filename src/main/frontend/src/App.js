import './App.css';
import TopRatedMoviePage from './movie/TopRatedMoviePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from './movie/MovieDetailsPage';
import DrawerAppBar from './MenuBar';
import StarDetailsPage from './movie/StarDetailsPage';


function App() {

  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<TopRatedMoviePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/star/:id" element={<StarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
