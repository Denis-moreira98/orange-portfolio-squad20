FROM eclipse-temurin:17-jdk-jammy

COPY mvnw pom.xml ./

COPY . .

RUN ./mvnw clean install -DskipTests

ENTRYPOINT [ "java", "-jar", "target/squad20-0.0.1-SNAPSHOT.jar" ]