package xyz.vndy.jwt.model;

import javax.persistence.*;

@Entity
@Table(name = "genres_in_movies")
public class GenreMovie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "genreId", referencedColumnName = "id")
    private Genre genre;

    @ManyToOne
    @JoinColumn(name = "movieId", referencedColumnName = "id")
    private Movie movie;

}







