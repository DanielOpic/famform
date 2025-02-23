import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpService } from '@s/http.service';
import { Router } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  /**
   * Konstruktor komponentu
   * @param fb
   * @param httpService
   * @param router
   */
  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {
    /**
     * Inicjalizacja formularza logowania
     */
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Funkcja logowania wywoływana po kliknięciu przycisku "Zaloguj" w formularzu
   * @returns void
   */
  onLogin() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.errorMessage = null;

    const { email, password } = this.loginForm.value;

    /**
     *  Wywołanie funkcji z serwisu HTTP, która wyśle zapytanie POST do endpointu `/auth/login`
     *  z danymi email i password. W przypadku sukcesu, użytkownik zostanie przekierowany
     *  na stronę `/dashboard`.
     */
    this.httpService.api('POST', 'auth/login', { email, password }).subscribe(
      (response) => {
        this.loading = false;

        // Nawigacja do innej strony po udanym logowaniu
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Nie udało się zalogować.';
      }
    );
  }
}
