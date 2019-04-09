package com.stackroute.ProjectDetails.listener;

import com.stackroute.ProjectDetails.domain.BidKafka;
import com.stackroute.ProjectDetails.domain.ProjectsOfProjectOwner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;

public class Producer {
    //    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaSender.class);

    @Value("${kafka.topic.details}")
    private String jsonTopic;

    @Autowired
    //private KafkaTemplate<String, String> kafkaTemplate;
    private KafkaTemplate<String, BidKafka> kafkaTemplate;

    //public void  send(String string) {
//        LOGGER.info("sending car='{}'", car.toString());
        //System.out.println(string);
        //kafkaTemplate.send(jsonTopic, string);
    //}

    public void  send(BidKafka bidKafka) {
//        LOGGER.info("sending car='{}'", car.toString());
        //System.out.println(string);
        kafkaTemplate.send(jsonTopic, bidKafka);
    }
}
