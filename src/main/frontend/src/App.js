import './App.css';
import MenuBar from './MenuBar';
import MovieCard from './movie/MovieCard';
// import MovieList from './movie/MovieList';
import MovieSearch from './movie/MovieSearch';
import Movie from './movie/Movie';
import TopRatedMoviePage from './movie/TopRatedMoviePage';

function App() {
  return (
    <div>
      <MenuBar />
      <TopRatedMoviePage />
      {/* <Movie /> */}
      {/* <MovieList /> */}
      {/* <MovieCard /> */}
      {/* <MovieSearch /> */}
    </div>
      
  );
}

export default App;
