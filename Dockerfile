FROM eclipse-temurin:17-jdk
EXPOSE 8080
ADD target/fabflix.jar fabflix.jar

ENTRYPOINT ["java", "-jar", "fabflix.jar"]
