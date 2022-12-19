package com.test.backend.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record TransactionDto(@NotNull(message = "Transaction amount can't be null")
                             @Min(value = 0, message = "Amount can't be less than zero") double amount,
                             Long senderId,
                             Long receiverId) {
    @AssertTrue(message = "Invalid transaction")
    private boolean isTransactionValid() {
        return senderId != null || receiverId != null;
    }
}
