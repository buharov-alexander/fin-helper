package com.bukharov.fh.fhaccounts.model

import jakarta.persistence.*
import org.joda.money.CurrencyUnit
import org.joda.money.Money
import java.math.BigDecimal

@Entity
class Account(
	@Column(nullable = false)
	val name: String,
	@Column(length = 3, nullable = false)
	var currency: String,
	@Column(columnDefinition = "Decimal(19,3) default '0.00'", nullable = false)
	var balance: BigDecimal,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	val id: Long? = null,
) {
	fun getBalance(): Money {
		return Money.of(CurrencyUnit.of(currency), balance)
	}

	fun setBalance(money: Money) {
		currency = money.currencyUnit.code
		balance = money.amount
	}
}