package xyz.vndy.jwt.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@ToString
@Getter
@Setter
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @Column(name = "id", length = 10)
    private String id;

    @Column(name = "title", length = 100, nullable = false)
    private String title;

    @Column(name = "year", nullable = false)
    private int year;

    @Column(name = "director", length = 100, nullable = false)
    private String director;
}

