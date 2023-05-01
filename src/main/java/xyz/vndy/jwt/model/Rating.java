package xyz.vndy.jwt.model;

import javax.persistence.*;

@Entity
@Table(name = "ratings")
public class Rating {

    @Id
    @Column(name = "movieId")
    private String movieId;

    @Column(name = "rating")
    private Float rating;

    @Column(name = "numVotes")
    private Integer numVotes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "movieId", referencedColumnName = "id", insertable = false, updatable = false)
    private Movie movie;
}