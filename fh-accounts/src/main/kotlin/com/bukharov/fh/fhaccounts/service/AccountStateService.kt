package com.bukharov.fh.fhaccounts.service

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.model.AccountState

interface AccountStateService {
	fun saveState(account: Account): AccountState
	fun getStates(accountId: Long): List<AccountState>
}