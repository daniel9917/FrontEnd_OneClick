import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private _url = "http://localhost:8080/libro/find";
  private _urla = "http://localhost:8080/autor/find";
  private _urle = "http://localhost:8080/editorial/find";
  constructor(
    private http:HttpClient
  ) {
    
    console.log('Estoy funcionando');
   }

   getLibros(){
     let header = new HttpHeaders().set('Type-Content','application/json');
     return this.http.get(this._url,{
       headers: header
     });

   }   
   getAutores(){
    let header = new HttpHeaders().set('Type-Content','application/json');
    return this.http.get(this._urla,{
      headers: header
    });
    }
   getEditoriales(){
    let header = new HttpHeaders().set('Type-Content','application/json');
    return this.http.get(this._urle,{
      headers: header
    });
    }
}
