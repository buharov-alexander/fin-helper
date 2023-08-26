package com.bukharov.fh.fhaccounts.config

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.datatype.jodamoney.JodaMoneyModule
import com.fasterxml.jackson.module.kotlin.kotlinModule
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary


@Configuration
class JacksonConfig {

	@Bean
	@Primary
	fun objectMapper(): ObjectMapper? {
		return ObjectMapper()
			.registerModules(
				kotlinModule(),
				JodaMoneyModule()
			)
	}
}