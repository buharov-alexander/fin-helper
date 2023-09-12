package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import org.springframework.data.repository.CrudRepository

internal interface AccountRepository : CrudRepository<Account, Long> {

	fun findByIsDisabledFalse(): List<Account>
}