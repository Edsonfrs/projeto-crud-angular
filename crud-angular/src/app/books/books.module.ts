import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';




@NgModule({
  declarations: [
    BooksComponent

  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class BooksModule { }
