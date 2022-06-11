import { Component, OnInit } from '@angular/core';
import { BookService } from './books.service';

export class Book {
  constructor(
    public name: string,
    public author: string,
    public cover: string,
    public date: string,
    public recap: string,
    public score: string,
    public status: string,
    public tags: string[]
  ) {}
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit() {}
}
