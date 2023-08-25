package com.bukharov.fh.fhaccounts.api

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.service.AccountService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/accounts")
class AccountsController(private val accountService: AccountService) {

	@GetMapping("/list")
	fun getAccounts(): List<AccountDTO> {
		return accountService.getAccounts().map { account: Account -> AccountDTO(account) }
	}

	@PostMapping("/account")
	fun createAccount(@RequestBody accountDTO: AccountDTO): AccountDTO {
		return AccountDTO(accountService.create(accountDTO.toModel()))
	}

}