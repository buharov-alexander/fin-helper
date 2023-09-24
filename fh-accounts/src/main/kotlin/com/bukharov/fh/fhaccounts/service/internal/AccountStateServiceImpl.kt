package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.model.AccountState
import com.bukharov.fh.fhaccounts.service.AccountStateService

internal class AccountStateServiceImpl(private val accountStateRepository: AccountStateRepository) : AccountStateService {

	override fun saveState(account: Account): AccountState {
		val accountState = account.getState();
		return accountStateRepository.save(accountState)
	}
}