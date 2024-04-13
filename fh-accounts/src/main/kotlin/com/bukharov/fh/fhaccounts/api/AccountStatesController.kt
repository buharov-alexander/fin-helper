package com.bukharov.fh.fhaccounts.api

import com.bukharov.fh.fhaccounts.service.AccountService
import com.bukharov.fh.fhaccounts.service.AccountStateService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/account-states")
internal class AccountStatesController(
	private val accountService: AccountService, private val accountStateService: AccountStateService) {

	@GetMapping("/account/{id}")
	fun getAccountStates(@PathVariable id: Long): List<AccountStateDTO> {
		return accountStateService.getStates(id).map { accountState -> AccountStateDTO(accountState) }
	}

	@PostMapping
	fun saveAccountState(@RequestBody accountState: AccountStateDTO): AccountStateDTO {
		return AccountStateDTO(accountStateService.saveState(accountState.toModel()))
	}

	@DeleteMapping("/{stateId}")
	fun deleteAccountState(@PathVariable stateId: Long) {
		return accountStateService.deleteState(stateId)
	}
}