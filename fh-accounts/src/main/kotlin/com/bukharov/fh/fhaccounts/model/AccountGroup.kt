/***************       BEGIN-STANDARD-COPYRIGHT      ***************

Copyright (c) 2009-2024, Spirent Communications.

All rights reserved. Proprietary and confidential information of Spirent Communications.
 ***************        END-STANDARD-COPYRIGHT       ***************/
package com.bukharov.fh.fhaccounts.model;

import jakarta.persistence.*
import org.joda.money.Money

@Entity
class AccountGroup(
	@Column(nullable = false)
	val name: String,
	@Column(nullable = false)
	@OneToMany
	val accounts: Set<Account>,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	val id: Long? = null,
)
