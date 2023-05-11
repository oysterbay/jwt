FROM arm64v8/openjdk:17-jdk-hotspot
EXPOSE 8080
ADD target/fabflix.jar fabflix.jar

ENTRYPOINT ["java", "-jar", "fabflix.jar"]
