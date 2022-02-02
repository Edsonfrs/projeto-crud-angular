package com.edsonfrs;

import com.edsonfrs.model.Book;
import com.edsonfrs.repository.BookRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}


	@Bean
	CommandLineRunner initDatabase(BookRepository bookRepository) {
		return args -> {
			bookRepository.deleteAll();

			Book c = new Book();
			c.setTitle("Drácula");
			c.setAuthor("Bram Stoker");
			c.setPublisher("Editora DarkSide");
			c.setCategory("Literatura Irlandesa - Horror - Vampiro");

			bookRepository.save(c);
		};
	}

}
