FROM openjdk:11

ADD ./target/eureka1-0.0.1-SNAPSHOT.jar /usr/src/eureka1-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "eureka1-0.0.1-SNAPSHOT.jar"]