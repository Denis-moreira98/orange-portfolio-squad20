FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:resolve

COPY . .
# RUN docker login -u=wilbertsilva -p=dckr_pat_1zJOKn9GwTErNS3jX47lMGpTGMg
RUN ./mvnw clean install -DskipTests
ENTRYPOINT [ "java", "-jar", "target/squad20-0.0.1-SNAPSHOT.jar" ]