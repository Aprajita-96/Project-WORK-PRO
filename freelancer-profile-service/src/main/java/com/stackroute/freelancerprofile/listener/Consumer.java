package com.stackroute.freelancerprofile.listener;

import com.stackroute.freelancerprofile.domain.BidKafka;
import com.stackroute.freelancerprofile.domain.ProjectsOfProjectOwner;
import com.stackroute.freelancerprofile.service.BidKafkaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;

import javax.sound.midi.Receiver;
import java.util.concurrent.CountDownLatch;


public class Consumer {
    private CountDownLatch latch = new CountDownLatch(1);
    @Autowired
    private BidKafkaService bidService;


    public Consumer() {
    }

    public CountDownLatch getLatch() {
        return latch;
    }

    @KafkaListener(topics = "projectDetails")
    public void receive(BidKafka bidKafka) {
        System.out.println(bidKafka);
        bidService.save(bidKafka);

//        BidKafka fetchedBidKafka=new BidKafka(bidKafka.getProjectId(),bidKafka.getProjectName(),bidKafka.getFreelancerEmail(),bidKafka.getBidAmount(),bidKafka.getDuration(),bidKafka.getStatus());
//            bidService.save(bidKafka);

//
//        JSONObject object=(JSONObject) JSONValue.parse(message);
//        BidKafka bidKafka=new BidKafka(object.get("projectName").toString(),object.get("projectId").toString(),
//                object.get("freelancerEmail").toString(),(Float)object.get("bidAmount"),(Integer)object.get("duration"),object.get("status").toString(),(Boolean)object.get("awarded"));
//        System.out.println(message);
//        List<JSONObject> paragraphList=paragraphService.getParagraphObject(pdfDocument.getDocumentId(),pdfDocument.getDocumentText());        kafkaProducer.postservice(paragraphList);        System.out.println("text\n"+pdfDocument.getDocumentText());
//        System.out.println("Id\n"+pdfDocument.getDocumentId());
//        System.out.println("metadata\n"+pdfDocument.getDocumentMetaData());
    }

}
