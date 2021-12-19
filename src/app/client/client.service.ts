import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

     

import {  Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

  

import { Client } from './client';

  

@Injectable({

  providedIn: 'root'

})

export class ClientService {

  

  private apiURL = "https://dev.greenrocksystems.com/simple-client-manager/api";

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'API-KEY':'339c37cc-f8d5-4403-b002-728a4721ad47'
    })

  }

   

  constructor(private httpClient: HttpClient) { }

    

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/clients/',this.httpOptions)
    .pipe(

      catchError(this.errorHandler)

    )

  }

    
  create(client:Client): Observable<any> {

  console.log(JSON.stringify(client));
  

    return this.httpClient.post(this.apiURL + '/clients/add', JSON.stringify(client), this.httpOptions)
    .pipe(

      catchError(this.errorHandler)

    )

  }  

    

  find(id:number): Observable<any> {

  

    return this.httpClient.get(this.apiURL + '/clients/details?client_id='+id,this.httpOptions)

  

    .pipe(

      catchError(this.errorHandler)

    )

  }

    

  /**

   * Write code on Method

   *

   * @return response()

   */

  update(id:number, client:Client): Observable<any> {

  

    return this.httpClient.post(this.apiURL + '/clients/update', JSON.stringify(client), this.httpOptions)

 

    .pipe( 

      catchError(this.errorHandler)

    )

  }

       

  /**

   * Write code on Method

   *

   * @return response()

   */

  delete(id:number){
    
    return this.httpClient.post(this.apiURL + '/clients/delete',JSON.stringify({'client_id':id}), this.httpOptions)

  

    .pipe(

      catchError(this.errorHandler)

    )

  }

      

  /** 

   * Write code on Method

   *

   * @return response()

   */

  errorHandler(error:any) {

    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);

 }

}