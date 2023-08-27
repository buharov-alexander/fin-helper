package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.service.AccountService
import org.springframework.stereotype.Service

@Service
internal class AccountServiceImpl(val accountRepository: AccountRepository) : AccountService {
	override fun getAccounts(): List<Account> {
		return accountRepository.findAll().toList()
	}

	override fun create(account: Account): Account {
		return accountRepository.save(account)
	}
}