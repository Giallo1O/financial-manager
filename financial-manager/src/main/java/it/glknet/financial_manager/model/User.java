package it.glknet.financial_manager.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@GeneratedValue
	@Id
	private String id;

	private String name;

	private String surname;

	private String address;

	private String country;

	private String email;
	
	@OneToMany
	private List<Transaction> transactions;

}
