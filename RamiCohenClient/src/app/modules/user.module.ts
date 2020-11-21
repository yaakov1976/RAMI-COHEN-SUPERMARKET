import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostClubMembersComponent } from '../components/clubMembers/post-club-members/post-club-members.component';
import { AddClubMembersComponent } from '../components/clubMembers/add-club-members/add-club-members.component';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteClubMembersComponent } from '../components/clubMembers/delete-club-members/delete-club-members.component';
import { EditClubMembersComponent } from '../components/clubMembers/edit-club-members/edit-club-members.component';

@NgModule({
  declarations: [PostClubMembersComponent, AddClubMembersComponent,
    DeleteClubMembersComponent, EditClubMembersComponent,
   ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
