package com.stackroute.freelancerprofile.service;


import com.stackroute.freelancerprofile.domain.Bid;
import com.stackroute.freelancerprofile.domain.BidKafka;
import com.stackroute.freelancerprofile.repository.BidKafkaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BidKafkaService {
    private BidKafkaRepository bidKafkaRepository;

    @Autowired
    public BidKafkaService(BidKafkaRepository bidKafkaRepository) {
        this.bidKafkaRepository = bidKafkaRepository;
    }
    public BidKafka save(BidKafka bid) {
        BidKafka result = bidKafkaRepository.save(bid);
        return result;
    }
}
