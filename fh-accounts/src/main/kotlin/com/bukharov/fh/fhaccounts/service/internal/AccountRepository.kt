package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.Account
import org.springframework.data.repository.CrudRepository

interface AccountRepository : CrudRepository<Account, Long>