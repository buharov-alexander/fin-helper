package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.AccountState
import org.springframework.data.repository.CrudRepository

internal interface AccountStateRepository : CrudRepository<AccountState, Long> {
	fun getByAccountId(accountId: Long) : List<AccountState>
}