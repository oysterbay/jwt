package xyz.vndy.fabflix.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @Autowired
    private HttpServletRequest request;

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

}
