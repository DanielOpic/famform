import { Component } from '@angular/core';
import { HttpService } from '@s/http.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private httpService: HttpService) {}
}
