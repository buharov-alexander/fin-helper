package com.bukharov.fh.fhaccounts.service.internal

import com.bukharov.fh.fhaccounts.model.AccountGroup
import com.bukharov.fh.fhaccounts.service.AccountGroupService
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
internal class AccountGroupServiceImpl(
	private val accountGroupRepository: AccountGroupRepository
) : AccountGroupService {
	override fun getGroups(accountId: Long): List<AccountGroup> {
		TODO("Not yet implemented")
	}

	override fun create(accountGroup: AccountGroup): AccountGroup {
		return accountGroupRepository.save(accountGroup)
	}
}