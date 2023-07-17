import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string='';
  password: string='';

  constructor(private router: Router) { }

  login() {
    // Realiza la lógica de autenticación aquí

    // Navega a la página de tab1
    this.router.navigate(['/tabs/tab1']);
  }
}