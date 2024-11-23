import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title: string = ''; // Título del modal
  @Input() imageUrl?: string; // URL de la imagen (opcional)
  @Input() videoUrl?: string; // URL del video (opcional)
  @Input() description: string = ''; // Descripción del modal
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal

  closeModal() {
    this.close.emit();
  }
}
