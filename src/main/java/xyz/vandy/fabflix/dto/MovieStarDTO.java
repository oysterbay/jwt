package xyz.vandy.fabflix.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieStarDTO {
    private String name;
    private Integer dob; // use Integer object type instead of an int primitive type. This allows us to set it to null without causing a NullPointerException.


    private List<MovieInfo> movies;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MovieInfo {
        private String id;
        private String name;
    }
}
