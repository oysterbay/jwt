package xyz.vndy.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import xyz.vndy.jwt.model.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {

    List<Movie> findByTitleContainingIgnoreCaseOrDirectorContainingIgnoreCase(String query, String query1);

    @Query(value = "SELECT m.*, s.name AS star_name, s.id AS star_id, g.name AS genre\n" +
            "FROM (\n" +
            "  SELECT movies.*, ratings.rating\n" +
            "  FROM movies\n" +
            "  INNER JOIN ratings ON ratings.movieId = movies.id\n" +
            "  ORDER BY ratings.rating DESC\n" +
            "  LIMIT 20\n" +
            ") AS m\n" +
            "INNER JOIN stars_in_movies sm ON sm.movieId = m.id\n" +
            "INNER JOIN stars s ON s.id = sm.starId\n" +
            "INNER JOIN genres_in_movies gm ON gm.movieId = m.id\n" +
            "INNER JOIN genres g ON g.id = gm.genreId;\n",
            nativeQuery = true)
    List<Object[]> getTop20Movies();
}
