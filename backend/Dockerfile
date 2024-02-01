FROM eclipse-temurin:17-jdk-jammy AS build

WORKDIR /java

COPY mvnw pom.xml ./
COPY .mvn ./.mvn
COPY src ./src

RUN ./mvnw clean package -DskipTests

ENTRYPOINT [ "java", "-jar", "target/squad20-0.0.1-SNAPSHOT.jar" ]
