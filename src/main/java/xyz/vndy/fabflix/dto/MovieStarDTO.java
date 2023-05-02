package xyz.vndy.fabflix.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieStarDTO {
    private String name;
    private Integer dob; // use Integer object type instead of an int primitive type. This allows us to set it to null without causing a NullPointerException.
    private String id;
    private String movie_name;
}
