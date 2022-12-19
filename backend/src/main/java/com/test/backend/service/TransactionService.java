package com.test.backend.service;

import java.util.*;

import com.test.backend.dto.TransactionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.constraints.NotNull;

import com.test.backend.model.Transaction;
import com.test.backend.model.Wallet;
import com.test.backend.repository.TransactionRepository;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private WalletService walletService;

    public Transaction execute(@NotNull TransactionDto transactionDto) {
        Transaction transaction = new Transaction();
        transaction.setDate(new Date(Calendar.getInstance().getTime().getTime()));

        double amount = transactionDto.amount();
        transaction.setAmount(amount);

        Wallet sender = walletService.withdrawBalance(transactionDto.senderId(),amount);
        Wallet receiver = walletService.addBalance(transactionDto.receiverId(),amount);

        walletService.updateAll(Arrays.asList(sender, receiver));

        transaction.setSender(sender);
        transaction.setReceiver(receiver);
        transactionRepository.save(transaction);
        return transaction;
    }
}
