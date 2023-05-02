package xyz.vndy.fabflix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import xyz.vndy.fabflix.model.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {

    List<Movie> findByTitleContainingIgnoreCaseOrDirectorContainingIgnoreCase(String query, String query1);

    @Query(value = "SELECT m.id AS movie_id, m.title AS movie_title, m.year AS movie_year, m.director AS movie_director,\n" +
            "       GROUP_CONCAT(DISTINCT g.name) AS genres_name, GROUP_CONCAT(DISTINCT s.id) AS stars_ids, \n" +
            "       GROUP_CONCAT(DISTINCT s.name) AS stars_names, r.rating AS ratings_rating\n" +
            "FROM movies m\n" +
            "LEFT JOIN genres_in_movies gm ON m.id = gm.movieId\n" +
            "LEFT JOIN genres g ON gm.genreId = g.id\n" +
            "LEFT JOIN stars_in_movies sm ON m.id = sm.movieId\n" +
            "LEFT JOIN stars s ON sm.starId = s.id\n" +
            "LEFT JOIN ratings r ON m.id = r.movieId\n" +
            "GROUP BY m.id, m.title, m.year, m.director, r.rating\n" +
            "ORDER BY r.rating DESC\n" +
            "LIMIT 20;",
            nativeQuery = true)
    List<Object[]> findTop20RatedMovies();


    @Query(value = "SELECT\n" +
            "  m.*,\n" +
            "  (SELECT GROUP_CONCAT(sm.starId) FROM stars_in_movies sm WHERE sm.movieId = m.id) AS star_ids,\n" +
            "  (SELECT GROUP_CONCAT(s.name) FROM stars_in_movies sm INNER JOIN stars s ON s.id = sm.starId WHERE sm.movieId = m.id) AS star_names,\n" +
            "  g.name AS genre,\n" +
            "  r.rating\n" +
            "FROM\n" +
            "  movies m\n" +
            "  INNER JOIN genres_in_movies gm ON gm.movieId = m.id\n" +
            "  INNER JOIN genres g ON g.id = gm.genreId\n" +
            "  INNER JOIN ratings r ON r.movieId = m.id\n" +
            "WHERE\n" +
            "  m.id = ?1", nativeQuery = true)
    Object findSingleMovieDetailsById(String movieId);

    @Query(value = "SELECT s.name AS star,\n" +
            "       s.birthyear AS birthyear,\n" +
            "       m.id AS movieid,\n" +
            "       m.title AS moviename\n" +
            "FROM stars s\n" +
            "INNER JOIN stars_in_movies sm ON sm.starid = s.id\n" +
            "INNER JOIN movies m ON m.id = sm.movieid\n" +
            "WHERE s.id = ?1", nativeQuery = true)
    List<Object[]> findMovieStarDetailsById(String movieId);
}
