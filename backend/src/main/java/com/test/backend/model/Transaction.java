package com.test.backend.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Entity(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull(message = "Transaction amount can't be null")
    @Min(value = 0, message = "Amount can't be less than zero")
    private double amount;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties(value = {"withdrawTransactions","addTransactions"})
    private Wallet sender;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties(value = {"addTransactions","withdrawTransactions"})
    private Wallet receiver;

    private Date date;

    @AssertTrue(message = "Invalid transaction")
    private boolean isTransactionValid() {
        return sender != null || receiver != null;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Wallet getSender() {
        return sender;
    }

    public void setSender(Wallet sender) {
        this.sender = sender;
    }

    public Wallet getReceiver() {
        return receiver;
    }

    public void setReceiver(Wallet receiver) {
        this.receiver = receiver;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
