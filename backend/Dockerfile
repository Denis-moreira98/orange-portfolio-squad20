FROM eclipse-temurin:17.0.10_7-jdk-jammy
COPY . .
RUN docker login -u=wilbertsilva
RUN ./mvnw clean install -DskipTests
ENTRYPOINT [ "java", "-jar", "target/squad20-0.0.1-SNAPSHOT.jar" ]