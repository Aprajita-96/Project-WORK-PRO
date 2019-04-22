FROM openjdk:11
ADD ./target/rrecommendation-service-0.0.1-SNAPSHOT.jar /usr/src/rrecommendation-service-0.0.1-SNAPSHOT.jar
EXPOSE 8075
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "rrecommendation-service-0.0.1-SNAPSHOT.jar"]