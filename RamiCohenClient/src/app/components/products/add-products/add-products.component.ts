import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsApiService } from '../../../core/products-api.service';
import { Products } from '../../../core/products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api:ProductsApiService, private router:Router) { }
addForm;
thePrice:number=1;
back(){
  this.router.navigate(['HOME/PRODUCTS']);
}
onSubmit(){
  if(this.addForm.invvalid){
    return;
  }
  const post:Products={
    productName:this.addForm.controls.productName.value,
    productDescription:this.addForm.controls.productDescription.value,
    category:this.addForm.controls.category.value,
    imageAddress:this.addForm.controls.imageAddress.value,
    price:this.addForm.controls.price.value,
    weight:this.addForm.controls.weight.value,
    totalPrice:this.thePrice
  }
  this.api.addPost(post).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/PRODUCTS']);
  })  
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      productName:['',Validators.required],
      productDescription:['',Validators.required],
      category:['',Validators.required],
      imageAddress:['',Validators.required],
      price:['',Validators.required],
      weight:['',Validators.required]
    });    
  }
}
