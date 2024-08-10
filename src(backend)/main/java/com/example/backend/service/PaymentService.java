package com.example.backend.service;

import com.example.backend.model.Payment;
import com.example.backend.repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepo paymentRepo;

    public Payment savePayment(Payment payment) {
        return paymentRepo.save(payment);
    }

    public List<Payment> getAllPayments() {
        return paymentRepo.findAll();
    }

    public Payment getPaymentById(Long paymentId) {
        return paymentRepo.findById(paymentId).orElse(null);
    }

    public boolean deletePayment(Long paymentId) {
        if (paymentRepo.existsById(paymentId)) {
            paymentRepo.deleteById(paymentId);
            return true;
        }
        return false;
    }
}
