package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.service.AccountService
import org.springframework.stereotype.Service

@Service
class AccountServiceImpl : AccountService {
	override fun getAccounts(): List<Account> {
		return listOf(Account("test1", 1, ))
	}
}