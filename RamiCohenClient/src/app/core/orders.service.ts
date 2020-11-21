import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Orders } from './orders';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http:HttpClient) { }
  getPostById(id):Observable<Orders>{
    return this.http.get<Orders>(`environment.OrdersApiUrl/${id}`);
  }
  getAll():Observable<Orders[]>{
    return this.http.get<Orders[]>(environment.ordersApiUrl);
  }
  addPost(post:Orders):Observable<Orders>{
    return this.http.post<Orders>(environment.ordersApiUrl, post);
  }
  deletePost(id:number): Observable<Orders>
  {
    return this.http.delete<Orders>(`${environment.ordersApiUrl}/${id}`);
  }
  editPost(post:Orders): Observable<Orders>
  {
    return this.http.put<Orders>(`${environment.ordersApiUrl}/${post.id}` , post)
  }
}
