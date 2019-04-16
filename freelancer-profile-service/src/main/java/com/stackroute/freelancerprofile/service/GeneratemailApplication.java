package com.stackroute.freelancerprofile.service;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.stackroute.freelancerprofile.domain.EmailMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
@Service
public class GeneratemailApplication{
    public GeneratemailApplication() {
    }

    @Value("${gmail.username}")
    private String username;
    @Value("${gmail.password}")
    private String password;

    public void sendmail(EmailMessage emailmessage) throws AddressException, MessagingException, IOException {

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(username, false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailmessage.getTo()));
        msg.setSubject(emailmessage.getSubject());
        msg.setContent(emailmessage.getBody(), "text/html");
        // msg.setContent("<h1>sending html mail check</h1>","text/html" );
        msg.setSentDate(new Date());
        Transport.send(msg);

    }
}