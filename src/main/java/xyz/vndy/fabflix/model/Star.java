package xyz.vndy.fabflix.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stars")
public class Star {
    @Id
    @Column(name = "id", length = 10)
    private String id;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "birthYear")
    private Integer birthYear;
}
