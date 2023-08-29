package com.bukharov.fh.fhaccounts.service

import com.bukharov.fh.fhaccounts.config.BigDecimalDeserializer
import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty
import java.math.BigDecimal

class CurrencyRateDTO {
	@JacksonXmlProperty(localName = "Name")
	var name: String? = null
	@JacksonXmlProperty(localName = "CharCode")
	var code: String? = null
	@JacksonXmlProperty(localName = "Nominal")
	var nominal: Int = 1
	@JacksonXmlProperty(localName = "Value")
	@JsonDeserialize(using = BigDecimalDeserializer::class)
	var value: BigDecimal = BigDecimal(0)
}
