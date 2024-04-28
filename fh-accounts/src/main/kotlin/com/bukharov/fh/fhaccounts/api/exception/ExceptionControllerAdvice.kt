package com.bukharov.fh.fhaccounts.api.exception

import org.springframework.core.Ordered
import org.springframework.core.annotation.Order
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
class ExceptionControllerAdvice {

	@ExceptionHandler(Exception::class)
	fun handleException(ex: Exception): ResponseEntity<ErrorMessageModel> {
		val errorMessage = ErrorMessageModel(
			HttpStatus.BAD_REQUEST.value(),
			ex.message
		)
		return ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST)
	}
}