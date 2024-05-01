package com.bukharov.fh.fhaccounts.service.internal.event

import org.springframework.context.ApplicationEvent

class AccountHistoryChangedEvent(source: Any, val accountId: Long) : ApplicationEvent(source)