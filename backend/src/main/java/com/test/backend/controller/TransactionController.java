package com.test.backend.controller;

import com.test.backend.dto.TransactionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import com.test.backend.model.Transaction;
import com.test.backend.service.TransactionService;
import com.test.backend.service.ValidationErrorService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @Autowired
    private ValidationErrorService validationService;


    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody TransactionDto transactionDTO, BindingResult result){
        ResponseEntity<?> errors = validationService.validate(result);
        if(errors != null) return errors;
        Transaction transactionExecuted = transactionService.execute(transactionDTO);
        return new ResponseEntity<>(transactionExecuted, HttpStatus.CREATED);
    }
}