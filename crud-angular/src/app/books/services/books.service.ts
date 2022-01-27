import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  list(): Book[] {
    return [
      {_id: '1', title: 'Drácula', author: 'Bram Stoker', publisher: 'Editora Darkside', category: 'Ficção Irlandesa - Terror'}

    ];
  }

}
