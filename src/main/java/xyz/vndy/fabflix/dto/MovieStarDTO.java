package xyz.vndy.fabflix.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieStarDTO {
    private String name;
    private int dob;
    private String id;
    private String movie_name;
}
