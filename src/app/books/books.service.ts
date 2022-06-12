import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, tap } from 'rxjs';
import { Book } from './books.component';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  public selectedBooks$ = new Subject<Book[]>();

  constructor(private http: HttpClient) {}

  readData() {
    return this.http
      .get('/assets/books-data.csv', { responseType: 'text' })
      .pipe(
        map((res: any) => {
          this.convertCSVDataToBook(res);
          return this.books;
        }),
        tap((books: Book[]) => {
          this.setBook(books);
        })
      );
  }

  setBook(books: Book[]) {
    this.books = books;
    this.selectedBooks$.next(books);
  }

  // getBooks() {
  //   return this.books.slice();
  // }

  // getBook(index: number) {
  //   return this.books[index];
  // }

  convertCSVDataToBook(res: string): any {
    let rows = res.split(/\r\n/).slice(1); // first row is the title
    rows.forEach((r: string) => {
      let bookData = this.CSVParser(r);

      this.books.push(
        new Book(
          bookData[0],
          bookData[1],
          bookData[2],
          bookData[3], // parsing con la data
          bookData[4],
          bookData[5],
          bookData[6],
          bookData[7]?.split(',')
        )
      );
    });
  }

  CSVParser(text: string): any[] {
    const re_csvRow =
      /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;

    var row = [];
    text.replace(re_csvRow, function (m0, m1, m2, m3) {
      // for removing backslashes
      if (m1 !== undefined) row.push(m1.replace(/\\'/g, "'"));
      else if (m2 !== undefined) row.push(m2.replace(/\\"/g, '"'));
      else if (m3 !== undefined) row.push(m3);
      return '';
    });
    // if the last value is empty
    if (/,\s*$/.test(text)) row.push('');

    return row;
  }
}
