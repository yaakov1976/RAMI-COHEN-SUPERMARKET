import { Component, OnInit } from '@angular/core';
import { InvoiceItemApiService } from '../../../core/invoice-item-api.service';
import { InvoiceItem } from '../../../core/invoice-item';

@Component({
  selector: 'app-post-invoice-item',
  templateUrl: './post-invoice-item.component.html',
  styleUrls: ['./post-invoice-item.component.css']
})
export class PostInvoiceItemComponent implements OnInit {
  posts:InvoiceItem[];
  constructor(private postApi:InvoiceItemApiService) { }
  loadPost(){
    this.postApi.getAll().subscribe(posts =>this.posts=posts);
    console.log(this.posts);
  }
  ngOnInit(): void {
    this.loadPost();  
  }
}
