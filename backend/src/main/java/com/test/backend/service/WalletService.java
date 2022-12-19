package com.test.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.constraints.NotNull;

import com.test.backend.model.Wallet;
import com.test.backend.repository.WalletRepository;
import com.test.backend.exception.WalletException;

@Service
public class WalletService {
    @Autowired
    private WalletRepository walletRepository;

    public List<Wallet> getAll(){
        return walletRepository.findAll();
    }

    public Wallet getById(Long id){
        Optional<Wallet> wallet = walletRepository.findById(id);
        if(wallet.isPresent()){
            return wallet.get();
        }
        throw new WalletException("Wallet with "+id+" does not exists!");
    }

    public Wallet createOrUpdate(@NotNull Wallet wallet){
        walletRepository.save(wallet);
        return wallet;
    }

    public void updateAll(List<Wallet> wallets){
        for (Wallet wallet : wallets) {
            if(wallet != null){
                createOrUpdate(wallet);
            }
        }
    }

    public void delete(Long id){
        Optional<Wallet> wallet = walletRepository.findById(id);
        if(wallet.isPresent()){
            walletRepository.delete(wallet.get());
            return;
        }
        throw new WalletException("Wallet with "+id+" does not exists!");
    }

    public Wallet addBalance(Long id, double amount){
        if(id==null)return null;

        Optional<Wallet> wallet = walletRepository.findById(id);
        if(wallet.isPresent()){
            wallet.get().addBalance(amount);
            return wallet.get();
        }
        throw new WalletException("Wallet with "+id+" does not exists!");
    }

    public Wallet withdrawBalance(Long id, double amount){
        if(id==null)return null;

        Optional<Wallet> wallet = walletRepository.findById(id);
        if(wallet.isPresent()){
            if(wallet.get().getCurrentBalance()<amount){
                throw new WalletException("Sender doesn't have enough credit");
            }
            wallet.get().withdrawBalance(amount);
            return wallet.get();
        }
        throw new WalletException("Wallet with "+id+" does not exists!");
    }
}
