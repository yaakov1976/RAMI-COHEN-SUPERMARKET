import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClubMembersApiService } from '../../../core/club-members-api.service';
import { ClubMembers } from '../../../core/club-members';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-club-members',
  templateUrl: './add-club-members.component.html',
  styleUrls: ['./add-club-members.component.css']
})
export class AddClubMembersComponent implements OnInit {
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
    name:this.addForm.controls.name.value,
    email:this.addForm.controls.email.value,
  }
  this.api.addPost(post).subscribe(data =>{
    console.log(data);
    this.router.navigate(['HOME/CLUB MEMBERS']);
  })
  
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required]
    });
    
  }

}
