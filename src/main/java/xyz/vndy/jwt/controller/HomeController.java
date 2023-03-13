package xyz.vndy.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.vndy.jwt.model.Movie;
import xyz.vndy.jwt.repository.MovieRepository;
import xyz.vndy.jwt.service.MovieService;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private MovieService movieService;
    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/index")
    public String home() {
        return "index.html";
    }

    @GetMapping("/user-agent")
    public String getUserAgent() {
        String userAgent = request.getHeader("User-Agent");
        return userAgent;
    }

    @GetMapping("/rest")
    public Map<String, String> rest() {
        HashMap<String, String> map = new HashMap<>();
        map.put("arsenal", "1");
        map.put("mac", "2");
        map.put("manu", "3");
        return map;
    }

    @GetMapping("/movies")
    public List<Movie> movieList() {
        return movieService.getAllMovies();
    }


    @GetMapping("/items")
    public ResponseEntity<Page<Movie>> getMovies(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize) {
        Page<Movie> movies = movieService.getMovies(pageNumber, pageSize);
        return ResponseEntity.ok(movies);
    }


}
