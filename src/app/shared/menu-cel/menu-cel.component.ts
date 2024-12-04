import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu-cel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-cel.component.html',
  styleUrl: './menu-cel.component.scss'
})
export class MenuCelComponent {
  constructor(private router: Router,){

  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route)
    // Aquí se puede agregar lógica para navegar a la ruta correspondiente.
    console.log(`Navigating to ${route}`);
    this.menuOpen = false; // Cierra el menú después de hacer clic en una opción.
  }
}
