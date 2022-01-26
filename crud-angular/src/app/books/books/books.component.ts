import { Book } from './../model/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {_id: '1', title: 'Drácula', author: 'Bram Stoker', publisher: 'Editora Darkside', category: 'Ficção Irlandesa'}
  ];
  displayedColumns = ['title','author','publisher','category'];

  constructor() {
    //this.books = [];
  }

  ngOnInit(): void {
  }

}
