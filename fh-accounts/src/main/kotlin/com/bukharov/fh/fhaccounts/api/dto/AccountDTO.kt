package com.bukharov.fh.fhaccounts.api.dto

import com.bukharov.fh.fhaccounts.model.Account
import org.joda.money.Money

data class AccountDTO(
	val id: Long? = null,
	val name: String,
	val balance: Money
) {
	fun toModel(): Account {
		return Account(name, balance, id)
	}

	constructor(account: Account) : this(account.id, account.name, account.getBalance())
}
