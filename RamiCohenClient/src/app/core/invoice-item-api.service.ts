import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpParams} from '@angular/common/http';
import { InvoiceItem } from './invoice-item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceItemApiService {

  
  constructor(private http:HttpClient) { }
  getPostById(id):Observable<InvoiceItem>{
    return this.http.get<InvoiceItem>(`environment.invoiceItemApiUrl/${id}`);
  }
  getAll():Observable<InvoiceItem[]>{
    return this.http.get<InvoiceItem[]>(environment.invoiceItemApiUrl);
  }
  addPost(post:InvoiceItem):Observable<InvoiceItem>{
    return this.http.post<InvoiceItem>(environment.invoiceItemApiUrl, post);
  }
  deletePost(id:number): Observable<InvoiceItem>
  {
    return this.http.delete<InvoiceItem>(`${environment.invoiceItemApiUrl}/${id}`);
  }
  editPost(post:InvoiceItem): Observable<InvoiceItem>
  {
    return this.http.put<InvoiceItem>(`${environment.invoiceItemApiUrl}/${post.id}` , post)
  }
}
