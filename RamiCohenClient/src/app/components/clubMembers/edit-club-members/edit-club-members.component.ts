import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClubMembersApiService } from '../../../core/club-members-api.service';
import { ClubMembers } from '../../../core/club-members';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-club-members',
  templateUrl: './edit-club-members.component.html',
  styleUrls: ['./edit-club-members.component.css']
})
export class EditClubMembersComponent implements OnInit {
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api: ClubMembersApiService, private router:Router) { }
addForm;
back(){
  this.router.navigate(['HOME/CLUB MEMBERS']);
}
onSubmit(){
  if(this.addForm.invvalid){
    return;
  }
  const post:ClubMembers={
    id:this.addForm.controls.id.value,
    name:this.addForm.controls.name.value,
    email:this.addForm.controls.email.value,
  }  
  this.api.editPost(post).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/CLUB MEMBERS']);
  })
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required]
    }); 
  }
}
