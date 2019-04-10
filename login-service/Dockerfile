FROM maven:3.6.0-jdk-11

WORKDIR /app

COPY . .


RUN mvn clean

RUN mvn clean package -DskipTests

WORKDIR /app/target

CMD ["java", "-jar", "login-service-0.0.1-SNAPSHOT"]