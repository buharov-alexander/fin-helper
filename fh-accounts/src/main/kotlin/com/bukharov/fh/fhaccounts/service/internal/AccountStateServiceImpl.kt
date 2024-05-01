package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.model.AccountState
import com.bukharov.fh.fhaccounts.service.AccountStateService
import com.bukharov.fh.fhaccounts.service.internal.event.AccountHistoryChangedEvent
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

@Service
@Transactional
internal class AccountStateServiceImpl(
	private val accountStateRepository: AccountStateRepository,
	val publisher: ApplicationEventPublisher
) : AccountStateService {

	override fun saveCurrentState(account: Account): AccountState {
		val accountState = account.getState();
		return accountStateRepository.save(accountState)
	}

	override fun saveState(accountState: AccountState): AccountState {
		if (accountState.date.after(Date())) {
			throw IllegalArgumentException("Cannot save a future account state")
		}
		val savedState = accountStateRepository.save(accountState)
		publisher.publishEvent(AccountHistoryChangedEvent(this, accountState.accountId!!))
		return savedState
	}

	override fun getStates(accountId: Long): List<AccountState> {
		return accountStateRepository.getByAccountIdOrderByDateAsc(accountId)
	}

	override fun getLastState(accountId: Long): AccountState {
		val lastStateOpt = accountStateRepository.getFirstByAccountIdOrderByDateDesc(accountId)
		if (lastStateOpt.isEmpty) {
			throw IllegalArgumentException("State for account $accountId was not found")
		}
		return lastStateOpt.get()
	}

	override fun deleteState(stateId: Long) {
		val accountState = accountStateRepository.findById(stateId)
		if (accountState.isEmpty) {
			throw IllegalArgumentException("State $stateId was not found")
		}
		accountStateRepository.deleteById(stateId)
		publisher.publishEvent(AccountHistoryChangedEvent(this, accountState.get().accountId!!))
	}
}