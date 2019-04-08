package com.stackroute.freelancerprofile.service;


import com.stackroute.freelancerprofile.domain.Bid;
import com.stackroute.freelancerprofile.domain.Freelancer;
import com.stackroute.freelancerprofile.repository.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidService {
    private BidRepository bidRepository;

    @Autowired
    BidService(BidRepository bidRepository){
        this.bidRepository=bidRepository;
    }

    public Bid save(Bid bid){
        Bid result=bidRepository.save(bid);
        return result;
    }

    public List<Bid> allBids(){
        List<Bid> bids=bidRepository.findAll();
        return bids;
    }

}
