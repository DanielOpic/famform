import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EncryptionService } from '@s/encryption.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private encryptionService: EncryptionService
  ) {}

  /**
   * Uniwersalna funkcja do obsługi zapytań HTTP
   * @param method - metoda zapytania (GET, POST, PUT, DELETE)
   * @param endpoint - końcowy endpoint, który zostanie doklejony do `apiUrl`
   * @param data - dane, które będą wysyłane (dla POST, PUT, DELETE)
   * @returns Observable<any>
   */
  api(method: string, endpoint: string, data?: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;

    /**
     * Wstrzykujemy serwis szyfrujący i jeśli dane zawierają pole `password`,
     * to szyfrujemy je przed wysłaniem na serwer
     */
    if (data?.password) {
      data.password = this.encryptionService.encrypt(data.password);
    }

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
