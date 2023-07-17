import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {}

  openCategorias() {
    // Genera el enlace hacia la página de categorías
    const categoriasUrl = this.router.createUrlTree(['/categorias']);
    window.open(categoriasUrl.toString(), '_self');
  }
}