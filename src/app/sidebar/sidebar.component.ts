import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../books/books.component';
import { BookService } from '../books/books.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  selectedBook!: Book;
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.bookService.readData().subscribe();
    this.bookService.filteredBooks$.subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  ngOnDestroy(): void {
    this.bookService.filteredBooks$.unsubscribe();
  }

  onSelectBook(book: Book) {
    this.selectedBook = book;
    this.bookService.selectedBook$.next(book);
  }
}
