package com.bukharov.fh.fhaccounts.service

import com.bukharov.fh.fhaccounts.model.AccountGroup

interface AccountGroupService {
	fun create(accountGroup: AccountGroup): AccountGroup
	fun getGroups(accountId: Long): List<AccountGroup>
}