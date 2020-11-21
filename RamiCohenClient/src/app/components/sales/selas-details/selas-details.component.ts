import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from '../../../core/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from '../../../core/orders.service';
import { Orders } from '../../../core/orders';
import { Router } from '@angular/router';

import { InvoiceItemApiService } from '../../../core/invoice-item-api.service';
import { InvoiceItem } from 'src/app/core/invoice-item';
@Component({
  selector: 'app-selas-details',
  templateUrl: './selas-details.component.html',
  styleUrls: ['./selas-details.component.css']
})
export class SelasDetailsComponent implements OnInit {
  invoices:InvoiceItem[]=[];
  orderNumber:number;
  dailyGreeting: string;
  dataOfSeals:string;
  numberOfUnits :string;
  invalidLogin:boolean=false;
  constructor(private data: DataService ,
     private formBuilder:FormBuilder, private api: OrdersService, private router:Router,
      private apiInvoice: InvoiceItemApiService) { }
     
     addForm;
     onSubmit(){
       if(this.addForm.invvalid){
         return;
       }
       const post:Orders={
         fullName:this.addForm.controls.fullName.value,
         phonNumber:this.addForm.controls.phonNumber.value,
         email:this.addForm.controls.email.value,
         address:this.addForm.controls.address.value,
         delivery:this.addForm.controls.delivery.value,
         order_numberOfUnits:this.numberOfUnits,
         totalPrice:this.dataOfSeals,
         personalGreeting:this.dailyGreeting,
         orderStatus:this.addForm.controls.orderStatus.value,
         remarks:this.addForm.controls.remarks.value,
       }
        
       this.api.addPost(post).subscribe(data =>{
         this.orderNumber = data.id;
         console.log(this.orderNumber);
          this.addToInvoice();
         this.router.navigate(['HOME']);
       })
     }
     addToInvoice(){
      this.invoices.forEach(e =>{e.invoice_id = String(this.orderNumber)}); 
      this.invoices.forEach(e =>{
        this.apiInvoice.addPost(e).subscribe(d =>{
          console.log(d);
        })
      })
     }
     cheackDay(){
       var day =new Date().getDay();
       console.log(day);
      switch(day){
        case 0:
          this.dailyGreeting  = "have a happy day :)";
          break;
        case 1:
          this.dailyGreeting  = "have a happy day :)";
          break;
        case 2:
          this.dailyGreeting  = "have a happy day :)";
          break;
        case 3:
          this.dailyGreeting  = "have a happy day :)";
          break;
        case 5:
          this.dailyGreeting  = "shabat shalom";
          break;   
        default:
          this.dailyGreeting = 'have a good week';
    }
     }
  ngOnInit(): void {
    this.cheackDay();
    this.data.currentMessage.subscribe(message => this.dataOfSeals = message);
    this.data.currentMessage2.subscribe(message2 => this.numberOfUnits = message2);
    this.addForm=this.formBuilder.group({
      fullName:['',Validators.required],
      phonNumber:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      delivery:['',Validators.required],
      orderStatus:['',Validators.required],
      remarks:['',Validators.required]
    });
    this.invoices = this.data.retrievePassedObject();
    console.log(this.invoices);
  }

}
