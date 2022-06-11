import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  filterBooks(filter: string | null) {
    this;
  }
}
