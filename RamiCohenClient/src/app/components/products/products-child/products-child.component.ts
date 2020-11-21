import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from '../../../core/products';
@Component({
  selector: 'app-products-child',
  templateUrl: './products-child.component.html',
  styleUrls: ['./products-child.component.css']
})
export class ProductsChildComponent implements OnInit {
  @Output() buyNewProduct = new EventEmitter();
  @Input()TheProduct:Products;
  constructor() { }
  sendProduct(w){
    this.TheProduct.weight=w;
    this.buyNewProduct.emit(this.TheProduct);
  }
  ngOnInit(): void {
  }

}
