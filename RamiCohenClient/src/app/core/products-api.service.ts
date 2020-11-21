import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Products } from './products';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  constructor(private http:HttpClient) { }
  getPostById(id):Observable<Products>{
    return this.http.get<Products>(`environment.productsApiUrl/${id}`);
  }
  getAll():Observable<Products[]>{
    return this.http.get<Products[]>(environment.productsApiUrl);
  }
  addPost(post:Products):Observable<Products>{
    return this.http.post<Products>(environment.productsApiUrl, post);
  }
  deletePost(id:number): Observable<Products>
  {
    return this.http.delete<Products>(`${environment.productsApiUrl}/${id}`);
  }
  editPost(post:Products): Observable<Products>
  {
    return this.http.put<Products>(`${environment.productsApiUrl}/${post.id}` , post)
  }
}
