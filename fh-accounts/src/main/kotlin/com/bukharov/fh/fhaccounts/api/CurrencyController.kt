package com.bukharov.fh.fhaccounts.api

import com.bukharov.fh.fhaccounts.service.CurrencyConversionService
import com.bukharov.fh.fhaccounts.service.CurrencyRatesDTO
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/currency")
internal class CurrencyController(private val currencyConversionService: CurrencyConversionService) {

	@GetMapping("/daily")
	fun getDailyRates(): CurrencyRatesDTO {
		return currencyConversionService.getDailyRates()
	}
}