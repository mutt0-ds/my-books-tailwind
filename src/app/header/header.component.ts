import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  selectedIcon: string = 'home';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  filterBooks(filter: string[] | string) {
    this.bookService.filterBooks(filter);
  }
}
