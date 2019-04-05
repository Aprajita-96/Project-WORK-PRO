//package com.stackroute.freelancerprofile.listener;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.kafka.annotation.KafkaListener;
//
//import javax.sound.midi.Receiver;
//import java.util.concurrent.CountDownLatch;
//
//public class Consumer {
////    private static final Logger LOGGER = LoggerFactory.getLogger(Receiver.class);
//
//    private CountDownLatch latch = new CountDownLatch(1);
//
//    public CountDownLatch getLatch() {
//        return latch;
//    }
//
//    @KafkaListener(topics = "${kafka.topic.json}")
//    public void receive(String string) {
//        System.out.println(string);
//        latch.countDown();
//    }
//}
