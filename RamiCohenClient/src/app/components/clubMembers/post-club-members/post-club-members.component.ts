import { Component, OnInit } from '@angular/core';
import { ClubMembersApiService } from '../../../core/club-members-api.service';
import { ClubMembers } from '../../../core/club-members';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-club-members',
  templateUrl: './post-club-members.component.html',
  styleUrls: ['./post-club-members.component.css']
})
export class PostClubMembersComponent implements OnInit {
  posts:ClubMembers[];
  headElements = [ 'id', 'name','email'];
 
  constructor(private postApi:ClubMembersApiService,private router:Router) { }
  loadPost(){
    this.postApi.getAll().subscribe(posts =>this.posts=posts);
    console.log(this.posts);
  }
  home(){
    this.router.navigate(['/HOME']);
  }
  ngOnInit(): void {
    this.loadPost();
    
  }

}
