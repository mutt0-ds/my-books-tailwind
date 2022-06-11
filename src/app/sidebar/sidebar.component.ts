import { Component, OnInit } from '@angular/core';
import { Book } from '../books/books.component';
import { BookService } from '../books/books.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.bookService.readData().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
