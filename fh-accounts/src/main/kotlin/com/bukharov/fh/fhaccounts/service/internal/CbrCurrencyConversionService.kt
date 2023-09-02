package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.service.CurrencyConversionService
import com.bukharov.fh.fhaccounts.service.CurrencyRatesDTO
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import org.springframework.web.client.getForObject


@Service
internal class CbrCurrencyConversionService: CurrencyConversionService {

	private val restTemplate = RestTemplate()
	internal val SUPPORTED_CURRENCY = listOf("USD", "EUR")

	override fun getDailyRates(): CurrencyRatesDTO {
		val ratesDTO = restTemplate
				.getForObject<CurrencyRatesDTO>("http://www.cbr.ru/scripts/XML_daily_eng.asp", CurrencyRatesDTO::class)
				.currencyRate
				.filter { rateDTO -> SUPPORTED_CURRENCY.contains(rateDTO.code) }
		return CurrencyRatesDTO(ratesDTO)
	}
}