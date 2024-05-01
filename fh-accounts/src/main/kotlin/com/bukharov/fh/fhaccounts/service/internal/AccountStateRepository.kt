package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.AccountState
import org.springframework.data.repository.CrudRepository
import java.util.Optional

internal interface AccountStateRepository : CrudRepository<AccountState, Long> {
	fun getByAccountIdOrderByDateAsc(accountId: Long) : List<AccountState>
	fun getFirstByAccountIdOrderByDateDesc(accountId: Long) : Optional<AccountState>
}