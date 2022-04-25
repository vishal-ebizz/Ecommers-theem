import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductServiceService {

  cartCount = new BehaviorSubject<number>(0)

  constructor(private _http: HttpClient) { }
  items: any = [];

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addToCart(data: any) {

    return this._http.post(`${environment.apiUrl}`, data, this.httpOptions).pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    )
  }

  getItems() {
    return this._http.get(`${environment.apiUrl}`, this.httpOptions).pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    )
  }

  deletetoCart(id: any) {
    return this._http.delete(`${environment.apiUrl}` + '/' + id, this.httpOptions).pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    )
  }

private httpErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " + error.message);
    } else {
      console.error(
        "An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
    }

    return throwError("Error occurred. Pleas try again");
  }
}
