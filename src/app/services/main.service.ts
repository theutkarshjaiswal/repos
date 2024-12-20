import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private apiUrl = 'http://localhost:3000'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  test(): Observable<any> {
    const url = `${this.apiUrl}/test`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhc3NkZCIsImlhdCI6MTcwNjM1NjgwM30.XWfUuafcOwzAdH5vKTxbA8YoywYlPk2rvtTxpLqb3bo`,
    });

    return this.http.get(url, { headers, withCredentials: true });
  }
}
