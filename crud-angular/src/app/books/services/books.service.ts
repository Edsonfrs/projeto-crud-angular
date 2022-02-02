import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../model/book';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //private readonly API = '/assets/books.json';
  private readonly API = 'api/books';


  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Book[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(books => console.log(books))
    );
  }

}
