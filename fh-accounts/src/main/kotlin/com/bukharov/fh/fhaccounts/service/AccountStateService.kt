package com.bukharov.fh.fhaccounts.service

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.model.AccountState

interface AccountStateService {
	fun saveCurrentState(account: Account): AccountState
	fun saveState(accountState: AccountState): AccountState
	fun getStates(accountId: Long): List<AccountState>
	fun getLastState(accountId: Long): AccountState
	fun deleteState(stateId: Long)
}