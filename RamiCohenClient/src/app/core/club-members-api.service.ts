import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpParams} from '@angular/common/http';
import { ClubMembers } from './club-members';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClubMembersApiService {

  constructor(private http:HttpClient) { }
  getPostById(id):Observable<ClubMembers>{
    return this.http.get<ClubMembers>(`environment.clubMembersApiUrl/${id}`);
  }
  getAll():Observable<ClubMembers[]>{
    return this.http.get<ClubMembers[]>(environment.clubMembersApiUrl);
  }
  addPost(post:ClubMembers):Observable<ClubMembers>{
    return this.http.post<ClubMembers>(environment.clubMembersApiUrl, post);
  }
  deletePost(id:number): Observable<ClubMembers>
  {
    return this.http.delete<ClubMembers>(`${environment.clubMembersApiUrl}/${id}`);
  }
  editPost(post:ClubMembers): Observable<ClubMembers>
  {
    return this.http.put<ClubMembers>(`${environment.clubMembersApiUrl}/${post.id}` , post)
  }
}
