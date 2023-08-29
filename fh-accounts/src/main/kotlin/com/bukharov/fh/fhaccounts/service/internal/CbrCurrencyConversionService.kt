package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.service.CurrencyConversionService
import com.bukharov.fh.fhaccounts.service.CurrencyRatesDTO
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import org.springframework.web.client.getForObject


@Service
internal class CbrCurrencyConversionService: CurrencyConversionService {

	private val restTemplate = RestTemplate()

	override fun getDailyRates(): CurrencyRatesDTO {
		return restTemplate.getForObject("http://www.cbr.ru/scripts/XML_daily_eng.asp", CurrencyRatesDTO::class)
	}
}