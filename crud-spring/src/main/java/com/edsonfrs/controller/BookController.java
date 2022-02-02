package com.edsonfrs.controller;

import java.util.List;

import com.edsonfrs.model.Book;
import com.edsonfrs.repository.BookRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BookController {

    private final BookRepository bookRepository;

    @GetMapping
    //@RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<Book> list() {
        return bookRepository.findAll();
    }
    
}
