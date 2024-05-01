package com.bukharov.fh.fhaccounts.service.internal.event

import com.bukharov.fh.fhaccounts.service.AccountService
import com.bukharov.fh.fhaccounts.service.AccountStateService
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Propagation
import org.springframework.transaction.annotation.Transactional

@Component
class AccountHistoryChangedEventListener(
	private val accountService: AccountService,
	private val accountStateService: AccountStateService
) :	ApplicationListener<AccountHistoryChangedEvent> {

	@Transactional(propagation = Propagation.MANDATORY)
	override fun onApplicationEvent(event: AccountHistoryChangedEvent) {
		val lastState = accountStateService.getLastState(event.accountId)
		val account = accountService.getAccount(event.accountId)
		account.setBalance(lastState.getBalance())
	}
}