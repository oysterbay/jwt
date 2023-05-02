package xyz.vndy.fabflix.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import xyz.vndy.fabflix.dto.Top20RatedMovieDTO;
import xyz.vndy.fabflix.model.Movie;
import xyz.vndy.fabflix.repository.MovieRepository;

import java.util.ArrayList;
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

    public List<Top20RatedMovieDTO> getTopRatedMovies() {
        List<Object[]> results = movieRepository.findTop20RatedMovies();

        List<Top20RatedMovieDTO> topRatedMovies = new ArrayList<>();

        for (Object[] result : results) {
            Top20RatedMovieDTO movieDTO = new Top20RatedMovieDTO();
            movieDTO.setId((String) result[0]);
            movieDTO.setTitle((String) result[1]);
            movieDTO.setYear((Integer) result[2]);
            movieDTO.setDirector((String) result[3]);
            movieDTO.setGenre((String) result[4]);

            String starIds = (String) result[5];
            System.out.println("Star Ids: " + starIds);
            String starNames = (String) result[6];

            System.out.println("Star Names: " + starNames);

            List<Top20RatedMovieDTO.StarInfo> stars = createStarPairs(starIds, starNames);
            movieDTO.setStars(stars);

            movieDTO.setRating((Float) result[7]);

            topRatedMovies.add(movieDTO);
        }

        return topRatedMovies;
    }

    private List<Top20RatedMovieDTO.StarInfo> createStarPairs(String starIds, String starNames) {
        List<Top20RatedMovieDTO.StarInfo> starPairs = new ArrayList<>();
        String[] ids = starIds.split(",");
        String[] names = starNames.split(",");
        for (int i = 0; i < ids.length; i++) {
            starPairs.add(new Top20RatedMovieDTO.StarInfo(ids[i], names[i]));
        }
        return starPairs;
    }

    public Top20RatedMovieDTO getSingleMovieDetails(String movieId) {
        Object results = movieRepository.findSingleMovieDetailsById(movieId);

        Top20RatedMovieDTO movieDetails = new Top20RatedMovieDTO();

        Object[] row = (Object[]) results;
        movieDetails.setId((String) row[0]);
        movieDetails.setTitle((String) row[1]);
        movieDetails.setYear((Integer) row[2]);
        movieDetails.setDirector((String) row[3]);
//        movieDetails.setStar_name((String) row[4]);
        movieDetails.setGenre((String) row[5]);
        movieDetails.setRating((Float) row[6]);

        return movieDetails;

    }

}
