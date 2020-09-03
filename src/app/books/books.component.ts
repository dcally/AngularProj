import { Component, OnInit } from '@angular/core';

import { IBooks } from '../../Models/IBooks';
import { BooksService } from '../../Services/Books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  books: IBooks[] = [];

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: products => {
        this.books = products;
      },
    });
  }

}
