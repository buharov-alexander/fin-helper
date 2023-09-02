package com.bukharov.fh.fhaccounts.service

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement

@JacksonXmlRootElement(localName = "ValCurs")
class CurrencyRatesDTO() {
	constructor(rates: List<CurrencyRateDTO>) : this() { currencyRate = rates }

	@JacksonXmlElementWrapper(useWrapping = false)
	@JacksonXmlProperty(localName = "Valute")
	var currencyRate: List<CurrencyRateDTO> = mutableListOf()
}
