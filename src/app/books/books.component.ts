import { Component, OnInit } from '@angular/core';
import { BOOKS } from './mock-book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

   books = BOOKS;
  constructor() { }

  ngOnInit(): void {
  }

}
