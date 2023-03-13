package xyz.vndy.jwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.vndy.jwt.model.Movie;
import xyz.vndy.jwt.repository.MovieRepository;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

//    @Transactional
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
}
