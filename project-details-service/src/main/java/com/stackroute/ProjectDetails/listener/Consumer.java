//package com.stackroute.ProjectDetails.listener;
//
//import org.springframework.kafka.annotation.KafkaListener;
//
//import java.util.concurrent.CountDownLatch;
//
//public class Consumer {
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
