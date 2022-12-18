package com.test.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "wallet")
public class Wallet {
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }
}
