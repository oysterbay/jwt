package xyz.vndy.fabflix.controller;


import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.vndy.fabflix.dto.MovieStarDTO;
import xyz.vndy.fabflix.dto.Top20RatedMovieDTO;
import xyz.vndy.fabflix.model.Movie;
import xyz.vndy.fabflix.service.MovieService;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    public List<Movie> movieList() {
        return movieService.getAllMovies();
    }

    @GetMapping("/movies/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable String id) {

        log.info("id : " + id);

        Movie movie = movieService.getMovieById(id);
        if (movie != null) {
            return ResponseEntity.ok(movie);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/items")
    public ResponseEntity<Page<Movie>> getMovies(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize) {
        Page<Movie> movies = movieService.getMovies(pageNumber, pageSize);
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/search")
    public List<Movie> findMoviesByTitleOrDirectorContaining(@RequestParam("q") String query) {
        return movieService.findMoviesByTitleOrDirectorContaining(query, query);
    }

    @GetMapping("/top20")
    public List<Top20RatedMovieDTO> top20() {
        return movieService.getTopRatedMovies();
    }

    @GetMapping("movie/{movieId}")
    public ResponseEntity<Top20RatedMovieDTO> getSingleMovieDetails(@PathVariable String movieId) {
        log.info("get movie details with id: " + movieId);
        Top20RatedMovieDTO movieDetails = movieService.getSingleMovieDetails(movieId);
        if (movieDetails != null) {
            return ResponseEntity.ok(movieDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/star/{starId}")
    public ResponseEntity<MovieStarDTO> getMovieStarDetails(@PathVariable String starId) {
        log.info("get star details with id: " + starId);
        MovieStarDTO starDetails = movieService.getMovieStarDetails(starId);

        if (starDetails != null) {
            return ResponseEntity.ok(starDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
