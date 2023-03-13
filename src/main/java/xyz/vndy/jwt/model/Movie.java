package xyz.vndy.jwt.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

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
    @NotNull
    private String id;

    @NotNull
    private String title;

    @NotNull
    private int year;

    @NotNull
    private String director;
}
