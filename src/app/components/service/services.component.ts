import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  whatsappNumber: string = '573001234567';

  services = [
    {
      title: 'Desarrollo Web',
      description: 'Creación de sitios y aplicaciones web personalizadas.'
    },
    {
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento en la implementación de soluciones tecnológicas.'
    },
    {
      title: 'Soporte Técnico',
      description: 'Resolución de problemas y mantenimiento de sistemas.'
    }
  ];
redirectToWhatsApp(service: { title: string; description: string }): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres enviar un mensaje de interés sobre el servicio "${service.title}"?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const encodedMessage = encodeURIComponent(
          `¡Hola! Estoy interesado en el servicio "${service.title}". Por favor, mándenme más información.`
        );
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      }
    });
  }
}
