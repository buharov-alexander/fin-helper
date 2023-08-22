package com.bukharov.fh.fhaccounts.api

import com.bukharov.fh.fhaccounts.model.Account

data class AccountDTO(
	val id: Int? = null,
	val name: String,
) {

	constructor(account: Account) : this(account.id, account.name);
}
