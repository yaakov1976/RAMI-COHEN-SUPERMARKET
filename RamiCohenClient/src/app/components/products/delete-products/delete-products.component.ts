import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsApiService } from '../../../core/products-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api: ProductsApiService , private router:Router) { }
addForm;
back(){
  this.router.navigate(['HOME/PRODUCTS']);
}
onSubmit(){
  if(this.addForm.invvalid){
    return;
  }
  const post={id:this.addForm.controls.id.value, }
  this.api.deletePost(post.id).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/PRODUCTS']);
  })
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:['',Validators.compose([Validators.required])], 
    });  
  }
}
