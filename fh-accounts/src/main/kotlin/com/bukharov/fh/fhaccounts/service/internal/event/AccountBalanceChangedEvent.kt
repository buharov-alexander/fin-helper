package com.bukharov.fh.fhaccounts.service.internal.event

import com.bukharov.fh.fhaccounts.model.Account
import org.springframework.context.ApplicationEvent

class AccountBalanceChangedEvent(source: Any, val account: Account) : ApplicationEvent(source)