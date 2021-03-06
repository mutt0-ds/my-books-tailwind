import { Component, OnInit } from '@angular/core';
import { BookService } from './books.service';

export class Book {
  constructor(
    public name: string,
    public author: string,
    public cover: string,
    public date: Date | null,
    public recap: string,
    public score: number,
    public status: string,
    public tags: string[]
  ) {}
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  selectedBook!: Book;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.selectedBook$.subscribe((book: Book) => {
      console.log(book);
      this.selectedBook = book;
    });
  }

  openAmazonLink(selectedBook: Book) {
    let url = `s?k=${encodeURIComponent(selectedBook.name)}`;
    window.open(`https://www.amazon.com/${url}&i=stripbooks`);
  }
}
