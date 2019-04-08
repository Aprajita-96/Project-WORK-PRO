package com.stackroute.freelancerprofile.listener;

import com.stackroute.freelancerprofile.domain.Bid;
import org.apache.kafka.common.protocol.types.Field;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;



public class Producer {
    private static final Logger LOGGER = LoggerFactory.getLogger(Producer.class);

    @Value("${kafka.topic.json}")
    private String jsonTopic;

    @Autowired
    private KafkaTemplate<String, Bid> kafkaTemplate;

    public void  send(Bid bid) {
        kafkaTemplate.send(jsonTopic, bid);
    }
}

