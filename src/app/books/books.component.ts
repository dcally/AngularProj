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
  filterCover = true;
  filterTitle = true;
  filterSeries = false;
  filterReleaseDate = true;
  filterId = true;
  filterWordCount = false;
  filterAuthor = true;
  filterGenre = true;

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: products => {
        this.books = products;
      },
    });
  }
  toggleCover() {
    this.filterCover = !this.filterCover;
  }
  toggleTitle() {
    this.filterTitle = !this.filterTitle;
  }
  toggleSeries() {
    this.filterSeries = !this.filterSeries;
  }
  toggleReleaseDate() {
    this.filterReleaseDate = !this.filterReleaseDate;
  }
  toggleId() {
    this.filterId = !this.filterId;
  }
  toggleWordCount() {
    this.filterWordCount = !this.filterWordCount;
  }
  toggleAuthor() {
    this.filterAuthor = !this.filterAuthor;
  }
  toggleGenre() {
    this.filterGenre = !this.filterGenre;
  }
}
