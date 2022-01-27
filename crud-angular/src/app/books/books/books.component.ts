import { BooksService } from './../services/books.service';
import { Book } from './../model/book';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>;
  displayedColumns = ['title', 'author','publisher','category'];

  //booksService: BooksService;


  constructor(private booksService: BooksService ) {
    //this.books = [];
    //this.booksService = new BooksService();
    this.books$ = this.booksService.list();
  }

  ngOnInit(): void {

    //this.books = this.booksService.list();
  }

}
