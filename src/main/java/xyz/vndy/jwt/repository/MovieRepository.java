package xyz.vndy.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.vndy.jwt.model.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {

    List<Movie> findByTitleContainingIgnoreCaseOrDirectorContainingIgnoreCase(String query, String query1);
}
