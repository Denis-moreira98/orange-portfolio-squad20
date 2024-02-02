FROM eclipse-temurin:17-jdk-jammy AS build
WORKDIR /java
COPY mvnw pom.xml ./
COPY .mvn ./.mvn
COPY src ./src
RUN chmod +x ./mvnw
RUN ./mvnw clean install -DskipTests
ENTRYPOINT [ "java", "-jar", "/java/target/squad20-0.0.1-SNAPSHOT.jar" ]