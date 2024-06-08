package com.bukharov.fh.fhaccounts.api.dto

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.model.AccountState
import org.joda.money.Money
import java.util.*

class AccountStateDTO(
	val id: Long? = null,
	val accountId: Long? = null,
	val date: Date,
	val balance: Money
) {
	constructor(accountState: AccountState) : this(
		accountState.id,
		accountState.accountId,
		accountState.date,
		accountState.getBalance()
	)

	fun toModel(): AccountState {
		return AccountState(accountId, date, balance)
	}
}