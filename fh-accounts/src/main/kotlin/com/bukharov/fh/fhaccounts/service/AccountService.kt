package com.bukharov.fh.fhaccounts.service

import com.bukharov.fh.fhaccounts.model.Account

interface AccountService {
	fun getAccounts(): List<Account>
	fun create(account: Account): Account
	fun delete(accountId: Long)
}