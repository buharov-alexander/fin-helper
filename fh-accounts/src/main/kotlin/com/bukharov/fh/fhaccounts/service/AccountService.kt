package com.bukharov.fh.fhaccounts.service

import com.bukharov.fh.fhaccounts.model.Account
import org.joda.money.Money

interface AccountService {
	fun getAccounts(): List<Account>
	fun create(account: Account): Account
	fun update(accountId: Long, balance: Money): Account
	fun delete(accountId: Long)
}