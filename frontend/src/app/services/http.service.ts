import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Uniwersalna funkcja do obsługi zapytań HTTP
   * @param method - metoda zapytania (GET, POST, PUT, DELETE)
   * @param endpoint - końcowy endpoint, który zostanie doklejony do `apiUrl`
   * @param data - dane, które będą wysyłane (dla POST, PUT, DELETE)
   * @returns Observable<any>
   */
  api(method: string, endpoint: string, data?: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;

    // Sprawdź, czy metoda jest typu GET, POST, PUT, DELETE
    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get<any>(url);
      case 'POST':
        return this.http.post<any>(url, data);
      case 'PUT':
        return this.http.put<any>(url, data);
      case 'DELETE':
        return this.http.delete<any>(url);
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }
}
