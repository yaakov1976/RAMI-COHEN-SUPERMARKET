import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from '../../../core/orders.service';
import { Orders } from '../../../core/orders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api: OrdersService, private router:Router) { }
addForm;
post:Orders;
back(){
  this.router.navigate(['HOME/ORDERS']);
}
showPost(){
  console.log(this.post);
}
onSubmit(){
  if(this.addForm.invvalid){
    return;
  }
  const post:Orders={
    id:this.addForm.controls.id.value,
    fullName:this.addForm.controls.fullName.value,
    phonNumber:this.addForm.controls.phonNumber.value,
    email:this.addForm.controls.email.value,
    address:this.addForm.controls.address.value,
    delivery:this.addForm.controls.delivery.value,
    order_numberOfUnits:this.addForm.controls.order_numberOfUnits.value,
    totalPrice:this.addForm.controls.totalPrice.value,
    personalGreeting:this.addForm.controls.personalGreeting.value,
    orderStatus:this.addForm.controls.orderStatus.value,
    remarks:this.addForm.controls.remarks.value,
  } 
  this.api.editPost(post).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/ORDERS']);
  })
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:['',Validators.required],
      fullName:['',Validators.required],
      phonNumber:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      delivery:['',Validators.required],
      order_numberOfUnits:['',Validators.required],
      totalPrice:['',Validators.required],
      personalGreeting:['',Validators.required],
      orderStatus:['',Validators.required],
      remarks:['',Validators.required]
    });   
  }
}
