import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  services: any;

  constructor(private cdr: ChangeDetectorRef, private _servicesServices : ServicesService) {}

  ngOnInit(): void {
    this._servicesServices.getAll().subscribe({
      next : (response : any) => {
        this.services = response
      }
    })
  }

  whatsappNumber: string = '573001234567';

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
