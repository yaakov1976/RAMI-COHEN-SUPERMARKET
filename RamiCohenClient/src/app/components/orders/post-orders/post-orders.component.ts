import { Component, OnInit } from '@angular/core';
import { Orders } from '../../../core/orders';
import { OrdersService } from '../../../core/orders.service';
@Component({
  selector: 'app-post-orders',
  templateUrl: './post-orders.component.html',
  styleUrls: ['./post-orders.component.css']
})
export class PostOrdersComponent implements OnInit {
  posts:Orders[];
  headElements = [ 'id', 'fullName','phonNumber','email','address','delivery','order_numberOfUnits',
  'totalPrice','personalGreeting','orderStatus','remarks'];

  constructor(private postApi:OrdersService) { }
  loadPost(){
    this.postApi.getAll().subscribe(posts =>this.posts=posts);
    console.log(this.posts);
  }
  showData(){
    console.log(this.posts);
  }
  ngOnInit(): void {
    this.loadPost();   
  }
}

