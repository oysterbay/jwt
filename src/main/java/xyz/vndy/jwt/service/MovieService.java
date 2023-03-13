package xyz.vndy.jwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
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

    public Page<Movie> getMovies(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return movieRepository.findAll(pageable);
    }
}
