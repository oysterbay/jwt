package xyz.vndy.jwt.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import xyz.vndy.jwt.model.Movie;
import xyz.vndy.jwt.repository.MovieRepository;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Page<Movie> getMovies(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return movieRepository.findAll(pageable);
    }


    public Movie getMovieById(String id) {
        return movieRepository.findById(id).orElse(null);
    }

    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public void deleteMovieById(String id) {
        movieRepository.deleteById(id);
    }

    public List<Movie> findMoviesByTitleOrDirectorContaining(String query, String query1) {
        return movieRepository.findByTitleContainingIgnoreCaseOrDirectorContainingIgnoreCase(query, query1);
    }

    public List<Object[]> getTop20Movies() {
        return movieRepository.getTop20Movies();
    }
}
