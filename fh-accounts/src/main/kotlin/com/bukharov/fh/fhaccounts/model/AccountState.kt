package com.bukharov.fh.fhaccounts.model

import jakarta.persistence.*
import org.joda.money.CurrencyUnit
import org.joda.money.Money
import java.math.BigDecimal
import java.util.Date

@Entity
class AccountState(
	val accountId: Long?,
	val date: Date,
	balance: Money,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	val id: Long? = null,
) {
	@Column(length = 3, nullable = false)
	private var currency: String = "RUB"
	@Column(precision = 11, scale = 2, nullable = false)
	private var balance: BigDecimal = BigDecimal(0)

	init {
		setBalance(balance)
	}

	fun getBalance(): Money {
		return Money.of(CurrencyUnit.of(currency), balance)
	}

	fun setBalance(money: Money) {
		currency = money.currencyUnit.code
		balance = money.amount
	}
}