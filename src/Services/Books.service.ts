import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { IBooks } from '../Models/IBooks';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
    private BooksData = 'api/books/SampleData.json';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<IBooks[]> {
        console.log(this.BooksData);
        return this.http.get<IBooks[]>(this.BooksData);
    }

    // getBook(id: number): Observable<IBooks | undefined> {
    //    return this.getBooks()
    //    .pipe(
    //        map((products: IBooks[]) => products.find(p => p.bookId === id))
    //    );
    // }
}
