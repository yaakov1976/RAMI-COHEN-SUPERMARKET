import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../core/products-api.service';
import { Products } from '../../../core/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-post',
  templateUrl: './products-post.component.html',
  styleUrls: ['./products-post.component.css']
})
export class ProductsPostComponent implements OnInit {
  posts:Products[];
  selectedProducts:Products[];
  headElements = [ 'id', 'productName','productDescription','category',
  'price','weight','imageAddress'];
  constructor(private postApi:ProductsApiService,private router:Router) { }
  loadPost(){
    this.postApi.getAll().subscribe(posts =>{this.posts=posts;
     console.log(this.posts);
    }); 
  }
  displayProduct(p){
    this.selectedProducts.push(p);
  }
  home(){
    this.router.navigate(['/HOME']);
  }
  ngOnInit(): void {
    this.loadPost(); 
  }
}
