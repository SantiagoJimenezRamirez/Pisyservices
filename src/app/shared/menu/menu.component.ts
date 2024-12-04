import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() sectionSelected = new EventEmitter<string>();
  activeSection: 'asistencias' | 'logo' | 'servicios' = 'logo';

  setActiveSection(section: 'asistencias' | 'logo' | 'servicios') {
    this.activeSection = section;
    this.sectionSelected.emit(section); // Emitimos la sección seleccionada
  }

}
