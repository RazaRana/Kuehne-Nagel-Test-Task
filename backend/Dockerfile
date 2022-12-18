# build jar
FROM eclipse-temurin:17-jdk-jammy as builder
WORKDIR /app
COPY backend/.mvn/ .mvn
COPY backend/mvnw backend/pom.xml ./
RUN ./mvnw dependency:go-offline
COPY backend/src ./src
RUN ./mvnw clean install

# build production image
FROM eclipse-temurin:17-jre-jammy as production
WORKDIR /app
EXPOSE 3001
COPY --from=builder /app/target/*.jar /app/*.jar
ENTRYPOINT ["java", "-jar", "/app/*.jar" ]