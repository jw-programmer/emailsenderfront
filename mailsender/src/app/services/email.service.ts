import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailDto } from 'src/models/email.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(email: EmailDto): Observable<any> {
    return this.http.post(`${API_CONFIG.baseUrl}/email`, email, {
      observe: "response",
      responseType: "text"
    })
  }
}
