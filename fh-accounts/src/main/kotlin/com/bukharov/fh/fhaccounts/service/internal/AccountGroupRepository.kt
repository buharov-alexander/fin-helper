package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.model.AccountGroup
import org.springframework.data.repository.CrudRepository

internal interface AccountGroupRepository : CrudRepository<AccountGroup, Long> {
}