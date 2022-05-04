import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books: any;
  productListService: ProductListService;

  constructor(productListService: ProductListService) {
    this.productListService = productListService;
  }

  ngOnInit(): void {
    this.books = this.productListService.getBook().subscribe((data => {
      this.books = data;
    }));
  }

}
