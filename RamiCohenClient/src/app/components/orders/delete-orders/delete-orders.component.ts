import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from '../../../core/orders.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-orders',
  templateUrl: './delete-orders.component.html',
  styleUrls: ['./delete-orders.component.css']
})
export class DeleteOrdersComponent implements OnInit {
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api: OrdersService , private router:Router) { }
addForm;
back(){
  this.router.navigate(['HOME/ORDERS']);
}
onSubmit(){
  if(this.addForm.invvalid){
    return;
  }
  const post={
    id:this.addForm.controls.id.value, 
  }
  this.api.deletePost(post.id).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/ORDERS']);
  })
 
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:['',Validators.compose([Validators.required])],   
    });  
  }
}
