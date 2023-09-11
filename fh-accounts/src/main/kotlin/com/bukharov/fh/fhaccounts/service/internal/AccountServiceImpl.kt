package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.service.AccountService
import org.joda.money.Money
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException

@Service
internal class AccountServiceImpl(val accountRepository: AccountRepository) : AccountService {
	override fun getAccounts(): List<Account> {
		return accountRepository.findAll().toList()
	}

	override fun create(account: Account): Account {
		return accountRepository.save(account)
	}

	override fun update(accountId: Long, balance: Money): Account {
		val optional = accountRepository.findById(accountId)
		if (optional.isPresent) {
			val existingAccount = optional.get()
			existingAccount.setBalance(balance)
			return existingAccount
		}
		throw IllegalArgumentException("Account is not found")
	}

	override fun delete(accountId: Long) {
		return accountRepository.deleteById(accountId)
	}
}