import { BooksService } from './../services/books.service';
import { Book } from './../model/book';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>;
  displayedColumns = ['_id','title', 'author','publisher','category'];

  //booksService: BooksService;


  constructor(
    private booksService: BooksService,
    public dialog: MatDialog
     ) {
    //this.books = [];
    //this.booksService = new BooksService();
    this.books$ = this.booksService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de livros!');
        return of([])
      })
      );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

    //this.books = this.booksService.list();
  }

}
