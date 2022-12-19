package com.test.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.backend.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {}
