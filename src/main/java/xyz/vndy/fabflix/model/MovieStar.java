package xyz.vndy.fabflix.model;

import javax.persistence.*;

@Entity
@Table(name = "stars_in_movies")
public class MovieStar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "starId", referencedColumnName = "id")
    private Star star;

    @ManyToOne
    @JoinColumn(name = "movieId", referencedColumnName = "id")
    private Movie movie;

}

