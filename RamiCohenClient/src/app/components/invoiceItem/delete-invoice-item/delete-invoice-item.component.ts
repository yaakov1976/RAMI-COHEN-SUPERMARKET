import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceItemApiService } from '../../../core/invoice-item-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-invoice-item',
  templateUrl: './delete-invoice-item.component.html',
  styleUrls: ['./delete-invoice-item.component.css']
})
export class DeleteInvoiceItemComponent implements OnInit {
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api: InvoiceItemApiService , private router:Router) { }
addForm;
back(){
  this.router.navigate(['HOME/postsInvoiceItem']);
}
onSubmit(){
  if(this.addForm.invvalid){
    return;
  }
  const post={id:this.addForm.controls.id.value, }
  this.api.deletePost(post.id).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/postsInvoiceItem']);
  })
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({id:['',Validators.compose([Validators.required])], });  
  }
}
