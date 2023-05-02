package xyz.vndy.fabflix.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Top20RatedMovieDTO {
    String id;
    String title;
    int year;
    String director;
    Float rating;
    List<StarInfo> stars;
    String genre;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class StarInfo {
        String id;
        String name;
    }
}
