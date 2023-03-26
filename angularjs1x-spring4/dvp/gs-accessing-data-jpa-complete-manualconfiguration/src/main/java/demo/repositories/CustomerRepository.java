package demo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import demo.entities.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

	List<Customer> findByLastName(String lastName);
}
