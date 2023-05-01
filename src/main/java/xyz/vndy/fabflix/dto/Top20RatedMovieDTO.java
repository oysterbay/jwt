package xyz.vndy.fabflix.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Top20RatedMovieDTO {
    String id;
    String title;
    int year;
    String director;
    Float rating;
    String star_name;
    String genre;
}
