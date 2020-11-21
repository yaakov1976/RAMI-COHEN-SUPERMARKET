import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from '../../../core/products';

@Component({
  selector: 'app-selas-child',
  templateUrl: './selas-child.component.html',
  styleUrls: ['./selas-child.component.css']
})
export class SelasChildComponent implements OnInit {
  @Output() buyNewProduct = new EventEmitter();
  @Input()TheProduct:Products;
  constructor() { }
  sendProduct(w){
    var a = parseFloat(w);
    this.TheProduct.weight=a;
    this.TheProduct.totalPrice= this.TheProduct.weight * parseFloat(this.TheProduct.price);
    this.buyNewProduct.emit(this.TheProduct);
  }
  ngOnInit(): void {
  }

}
