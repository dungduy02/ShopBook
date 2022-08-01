import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { CartService } from './cart.service';
const API_URL = 'http://localhost:8080/api/admin/';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getOrder(): Observable<any> {
    return this.http.get(API_URL + 'order');
  }
  // getABook(id: any) :Observable<any> {
  //   return this.http.get(API_URL + 'find/' + id);
  // }
  // removeABook(bookId:any){
  //   return this.http.delete(`${API_URL + "deleteBook"}/${bookId}`).pipe(map((reponse:
  //     any) => {
  //       console.log("reponse:" + reponse);
  //       return reponse;
  //     }))
  // }
  // getUpdateBook(data:any, bookid: number){
  //   return this.http.put(`${API_URL2 +"updateBook"}/${bookid}`, data).pipe(map(
  //     (reponse: any) =>{
  //       console.log("có update được ko")
  //       return reponse;
  //     }
  //   ))
  // }

  // getAddBook(data: any): Observable<any>{
  //   let headers = new HttpHeaders();
  //   headers.append('content-type', 'application/json');
  //   headers.append('accept', 'application/json');
  //   return this.http.post(API_URL2 + "addBook", data, {headers: headers}).pipe(map(
  //     (reponse: any) =>{
  //       return reponse;
  //     }
  //   ))
  
  // }
}
