import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceItemApiService } from '../../../core/invoice-item-api.service';
import { InvoiceItem } from '../../../core/invoice-item';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-invoice-item',
  templateUrl: './add-invoice-item.component.html',
  styleUrls: ['./add-invoice-item.component.css']
})
export class AddInvoiceItemComponent implements OnInit {
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api: InvoiceItemApiService, private router:Router) { }
addForm;
back(){
  this.router.navigate(['HOME/postsInvoiceItem']);
}
onSubmit(){
  if(this.addForm.invvalid){
    return;
  }
  const post:InvoiceItem={
    invoice_id:this.addForm.controls.invoice_id.value,
    product_name:this.addForm.controls.product_id.value,
    quantity:this.addForm.controls.quantity.value,
  }
  this.api.addPost(post).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/postsInvoiceItem']);
  })
  
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      invoice_id:['',Validators.required],
      product_id:['',Validators.required],
      quantity:['',Validators.required]
    });
    
  }


}
