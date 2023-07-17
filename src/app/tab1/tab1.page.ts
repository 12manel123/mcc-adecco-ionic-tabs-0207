import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username: string='';
  constructor(private router: Router) {}
  ngOnInit() {
    // Aquí obtienes el nombre de usuario de tu lógica de autenticación o de algún servicio
    this.username = 'Nombre de usuario';
  }
  goToCategorias() {
    // Navega hacia la página de categorías que incluye las tabs
    this.router.navigate(['/tabs/categorias']);
  }
}