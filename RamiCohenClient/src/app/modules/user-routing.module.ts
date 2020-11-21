import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostClubMembersComponent } from '../components/clubMembers/post-club-members/post-club-members.component';
import { AddClubMembersComponent } from '../components/clubMembers/add-club-members/add-club-members.component';
import { DeleteClubMembersComponent } from '../components/clubMembers/delete-club-members/delete-club-members.component';
import { EditClubMembersComponent } from '../components/clubMembers/edit-club-members/edit-club-members.component';

import { HomeComponent } from '../components/home/home.component';


const routes: Routes = [
  {path:'HOME',component:HomeComponent},
{path:'',component:PostClubMembersComponent},
{path:'posts',component:PostClubMembersComponent},
{path:'add',component:AddClubMembersComponent},
{path:'delete',component:DeleteClubMembersComponent},
{path:'edit',component:EditClubMembersComponent },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
