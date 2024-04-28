package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.model.AccountState
import com.bukharov.fh.fhaccounts.service.AccountStateService
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

@Service
@Transactional
internal class AccountStateServiceImpl(private val accountStateRepository: AccountStateRepository) :
	AccountStateService {

	override fun saveCurrentState(account: Account): AccountState {
		val accountState = account.getState();
		return accountStateRepository.save(accountState)
	}

	override fun saveState(accountState: AccountState): AccountState {
		if (accountState.date.after(Date())) {
			throw IllegalArgumentException("Cannot save a future account state")
		}
		return accountStateRepository.save(accountState)
	}

	override fun getStates(accountId: Long): List<AccountState> {
		return accountStateRepository.getByAccountIdOrderByDateAsc(accountId)
	}

	override fun deleteState(stateId: Long) {
		accountStateRepository.deleteById(stateId)
	}
}