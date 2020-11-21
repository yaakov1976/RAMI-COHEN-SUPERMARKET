import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClubMembersApiService } from '../../../core/club-members-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-club-members',
  templateUrl: './delete-club-members.component.html',
  styleUrls: ['./delete-club-members.component.css']
})
export class DeleteClubMembersComponent implements OnInit {
  invalidLogin:boolean=false;
  constructor(private formBuilder:FormBuilder, private api: ClubMembersApiService , private router:Router) { }
addForm;
back(){
  this.router.navigate(['HOME/CLUB MEMBERS']);
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
    this.router.navigate(['HOME/CLUB MEMBERS']);
  })
 
}
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:['',Validators.compose([Validators.required])],
    
    });
    
  }

}
