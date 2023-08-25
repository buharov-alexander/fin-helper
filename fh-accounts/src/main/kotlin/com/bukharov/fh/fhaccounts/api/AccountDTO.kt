package com.bukharov.fh.fhaccounts.api

import com.bukharov.fh.fhaccounts.model.Account

data class AccountDTO(
	val id: Long? = null,
	val name: String,
) {
	fun toModel(): Account {
		return Account(name)
	}

	constructor(account: Account) : this(account.id, account.name)
}
