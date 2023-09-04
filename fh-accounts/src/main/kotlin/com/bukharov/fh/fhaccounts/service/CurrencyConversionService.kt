package com.bukharov.fh.fhaccounts.service

import java.math.BigDecimal

interface CurrencyConversionService {
	fun getDailyRates(): Map<String, BigDecimal>
}