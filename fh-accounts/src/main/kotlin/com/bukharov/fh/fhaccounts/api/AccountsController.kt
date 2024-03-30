package com.bukharov.fh.fhaccounts.api

import com.bukharov.fh.fhaccounts.model.Account
import com.bukharov.fh.fhaccounts.service.AccountService
import com.bukharov.fh.fhaccounts.service.AccountStateService
import org.joda.money.Money
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/accounts")
internal class AccountsController(
	private val accountService: AccountService, private val accountStateService: AccountStateService) {

	@GetMapping("/list")
	fun getAccounts(): List<AccountDTO> {
		return accountService.getAccounts().map { account: Account -> AccountDTO(account) }
	}

	@GetMapping("/{id}")
	fun getAccount(@PathVariable id: Long): AccountDTO {
		return AccountDTO(accountService.getAccount(id))
	}

	@PostMapping("/account")
	fun createAccount(@RequestBody accountDTO: AccountDTO): AccountDTO {
		return AccountDTO(accountService.create(accountDTO.toModel()))
	}

	@PutMapping("/account/{id}")
	fun updateAccount(@PathVariable id: Long,  @RequestBody balance: Money): AccountDTO {
		return AccountDTO(accountService.update(id, balance))
	}

	@DeleteMapping("/account/{id}")
	fun deleteAccount(@PathVariable id: Long) {
		accountService.delete(id)
	}

	@GetMapping("/account/{id}/states")
	fun getAccountStates(@PathVariable id: Long): List<AccountStateDTO> {
		return accountStateService.getStates(id).map { accountState -> AccountStateDTO(accountState) }
	}

	@DeleteMapping("/account/states/{stateId}")
	fun deleteAccountState(@PathVariable stateId: Long) {
		return accountStateService.deleteState(stateId)
	}
}