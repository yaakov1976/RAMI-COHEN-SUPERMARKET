import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../core/products-api.service';
import { Products } from '../../../core/products';
import { Router } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { InvoiceItem } from 'src/app/core/invoice-item';
import { Category } from 'src/app/core/category';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  Categories:Category[]=[{name:"meat",img:"../../../../assets/pictur/meat.webp"},
{name:"vegetable",img:"../../../../assets/Cucumber.jpg"},
{name:"bread",img:"../../../../assets/pictur/bread.jpg"},
{name:"fruit",img:"../../../../assets/pictur/apple.jpg"},
{name:"others",img:"../../../../assets/pictur/others.jpg"},
];
  calculatTotal:number=0;
  dataOfSeals:string="";
  numberOfUnits:number=0;
  dataOfUnits:string="";
  posts:Products[];
  postsByCategory:Products[]=[];
  postByCategory:boolean= false;
  selectedProducts:Products[]=[];
  invoice:InvoiceItem; 
  headElements = [ 'id', 'productName', 'price','weight','TOTAL PRICE','delete from list'];
  nameToDelete:string;
  constructor(private postApi:ProductsApiService,private router:Router , private data: DataService, ) { }
  passObjects : InvoiceItem[]=[]; 
 
  loadPost(){
    this.postApi.getAll().subscribe(posts =>{this.posts=posts;
    }); 
  }
  selectedCategory(name){
    console.log(name);
    this.postByCategory = true;
    this.postsByCategory=[];
    console.log(this.postsByCategory);
    this.posts.forEach(post =>{
      if(post.category==name){
        this.postsByCategory.push(post);
        console.log(this.postsByCategory);
      }
    })
  }
  displayProduct(p){
    this.selectedProducts.push(p);
    const post:InvoiceItem={
      invoice_id:"0",
      product_name:p.productName,
      quantity:p.weight,
    }
    this.passObjects.push(post);
    this.calculatTotal += p.totalPrice;
    this.numberOfUnits ++;
  }
  deleteThisProduct(id){
    this.selectedProducts.forEach(element => { 
      if(element.id == id){
        this.nameToDelete=element.productName;
      }
    });
    const result1 = this.passObjects.filter(inv => inv.product_name != this.nameToDelete);
    this.passObjects = result1;
    const result = this.selectedProducts.filter(Product => Product.id != id);
    this.selectedProducts = result;
    this.calculatTotal =0;
    this.selectedProducts.forEach(element => this.calculatTotal += element.totalPrice);
    this.numberOfUnits --;
  }
  home(){
    this.router.navigate(['/HOME']);
  }
  sendToDetails(){
    this.dataOfSeals = String( this.calculatTotal.toFixed(2));
    this.data.changeMessage(this.dataOfSeals);
    this.dataOfUnits = String( this.numberOfUnits);
    this.data.changeMessage2(this.dataOfUnits)
    this.data.storePassedObject(this.passObjects);
    this.router.navigate(['/selasDetails']);
  }
  
  ngOnInit(): void {
    this.loadPost(); 
    
  }
}
