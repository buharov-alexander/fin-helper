package com.bukharov.fh.fhaccounts.service

interface CurrencyConversionService {
	fun getDailyRates(): CurrencyRatesDTO
}