package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import org.springframework.context.ApplicationEvent

class AccountStateChangedEvent(source: Any, val account: Account) : ApplicationEvent(source)