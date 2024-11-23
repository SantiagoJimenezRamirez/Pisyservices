import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  date = this.getCurrentDateTime()

  constructor(){
  }
  getCurrentDateTime(): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
  
    return now.toLocaleString("es-ES", options);
  }
  
  redirectToWhatsAppWithNumber(message: string): void {
    console.log("MENSAJEEEEEEEEEEEE")
    const phoneNumber = "13478991749"; // Número con el código de país sin signos "+" ni espacios
  
    if (!phoneNumber || !message) {
      console.error("El número de teléfono y el mensaje son obligatorios.");
      return;
    }
  
    // Codificar el mensaje para asegurar que sea compatible con URL
    const encodedMessage = encodeURIComponent(message);
  
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Redireccionar al enlace
    window.open(whatsappUrl, '_blank');
  }
}
