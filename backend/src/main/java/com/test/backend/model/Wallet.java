package com.test.backend.model;

import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity(name = "wallet")
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Name can't be blank")
    @Size(min = 2,max = 30)
    private String name;

    @Size(max = 100)
    private String description;

    @NotNull(message = "Balance can't be null")
    @Min(value = 0, message = "Balance can't be less than zero")
    private double currentBalance;

    @OneToMany(mappedBy = "sender", fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    private List<Transaction> withdrawTransactions;

    @OneToMany(mappedBy = "receiver", fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    private List<Transaction> addTransactions;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void addBalance(double balance) {
        this.currentBalance += balance;
    }

    public void withdrawBalance(double balance) {
        this.currentBalance -= balance;
    }

    public double getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(double currentBalance) {
        this.currentBalance = currentBalance;
    }

    public List<Transaction> getWithdrawTransactions() {
        return withdrawTransactions;
    }

    public List<Transaction> getAddTransactions() {
        return addTransactions;
    }
}
