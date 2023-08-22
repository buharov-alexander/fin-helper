package com.bukharov.fh.fhaccounts.model

import jakarta.persistence.*

@Entity
class Account(
	@Column(nullable = false)
	val name: String,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	val id: Int? = null,
)