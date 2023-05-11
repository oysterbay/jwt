FROM openjdk:17
EXPOSE 8080
ADD target/fabflix.jar fabflix.jar

ENTRYPOINT ["java", "-jar", "fabflix.jar"]
