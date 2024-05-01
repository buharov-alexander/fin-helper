package com.bukharov.fh.fhaccounts.service.internal.event

import com.bukharov.fh.fhaccounts.service.AccountStateService
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Propagation
import org.springframework.transaction.annotation.Transactional

@Component
class AccountBalanceChangedEventListener(private val accountStateService: AccountStateService) :
	ApplicationListener<AccountBalanceChangedEvent> {

	@Transactional(propagation = Propagation.MANDATORY)
	override fun onApplicationEvent(event: AccountBalanceChangedEvent) {
		accountStateService.saveCurrentState(event.account)
	}
}