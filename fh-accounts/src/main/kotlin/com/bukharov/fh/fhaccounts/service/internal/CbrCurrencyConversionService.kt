package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.service.CurrencyConversionService
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import org.springframework.web.client.getForObject
import java.math.BigDecimal

val SUPPORTED_CURRENCY = listOf("USD", "EUR")

@Service
internal class CbrCurrencyConversionService : CurrencyConversionService {

	private val restTemplate = RestTemplate()

	@Suppress("UNCHECKED_CAST")
	override fun getDailyRates(): Map<String, BigDecimal> {
		return restTemplate
			.getForObject<CurrencyRatesDTO>("http://www.cbr.ru/scripts/XML_daily_eng.asp", CurrencyRatesDTO::class)
			.currencyRate
			.filter { rateDTO -> SUPPORTED_CURRENCY.contains(rateDTO.code) }
			.associate { rateDTO -> rateDTO.code to rateDTO.value } as Map<String, BigDecimal>
	}
}