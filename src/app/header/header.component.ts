import { Component } from '@angular/core';
import { BookService } from '../books/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  selectedIcon: string = 'home';

  constructor(private bookService: BookService) {}

  filterBooks(filter: string[] | string) {
    // TODO: fare qua il collegamento alle icone per il selected e cambiare nome my books
    this.bookService.filterBooks(filter);
  }
}
