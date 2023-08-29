package com.bukharov.fh.fhaccounts.config

import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonDeserializer
import java.math.BigDecimal

class BigDecimalDeserializer: JsonDeserializer<BigDecimal>() {
	override fun deserialize(jsonParser: JsonParser, ctxt: DeserializationContext?): BigDecimal {
		val str: String = jsonParser.text.replace(",", ".")
		return str.toBigDecimal()
	}

}
