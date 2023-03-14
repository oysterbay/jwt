import './App.css';
import MenuBar from './MenuBar';
import MovieList from './movie/MovieList';
import MovieSearch from './movie/MovieSearch';

function App() {
  return (
    <div>
      <MenuBar />
      <MovieList />
      <MovieSearch />
    </div>
      
  );
}

export default App;
