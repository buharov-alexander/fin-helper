package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.service.AccountStateService
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component

@Component
class AccountStateChangedEventListener(private val accountStateService: AccountStateService) :
	ApplicationListener<AccountStateChangedEvent> {
	override fun onApplicationEvent(event: AccountStateChangedEvent) {
		accountStateService.saveCurrentState(event.account)
	}
}