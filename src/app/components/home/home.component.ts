import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ServicesComponent } from "../service/services.component";
import { GeneralComponent } from "../general/general.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { OtherServicesComponent } from "../../other-services/other-services.component";
import { DeviceInfoService } from '../../services/device-info.service';
import { RequestFormService } from '../../services/request-form.service';
import Swal from 'sweetalert2';
import { ServicesOtherComponent } from "../services-other/services-other.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent, ServicesComponent, ReactiveFormsModule, GeneralComponent, FooterComponent, OtherServicesComponent, ServicesOtherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  email = "Pisyhtrucks@hotmail.com";
  texts: string[] = [
    'En nuestro taller, tu vehículo no solo recibe mantenimiento, recibe atención de expertos que lo tratan como si fuera propio, garantizando su máximo rendimiento y seguridad.',
    'No importa el problema, tenemos la experiencia y tecnología para diagnosticar y solucionar cualquier fallo, porque en nuestro taller, cada coche es una prioridad.',
    'Te ofrecemos un servicio rápido, confiable y con precios transparentes, porque sabemos que tu tiempo y tu coche son lo más importante.',
    'Nuestro taller no solo repara, transforma tu vehículo en una máquina más eficiente, ahorrándote dinero a largo plazo y dándote tranquilidad en cada kilómetro.'
  ];


  activeIndex: number = 0;
  name = "P I S Y C A R S"
  selectedSection: string = '';
  showServices = false;
  showInfo = true;
  showProducts = false;

  serviceRequestForm: FormGroup;

  constructor(private _device: DeviceInfoService, private fb: FormBuilder, private _requestForm: RequestFormService){
    this.serviceRequestForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit(): void {
    const deviceInfo = this._device.getDeviceInfo()

    this._device.add(deviceInfo).subscribe({
      next: (response:any) => {
        
      },
    })
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.texts.length;
    }, 10000); // Cambia el texto cada 10 segundos
  }

  onSubmit(): void {
    
    if (this.serviceRequestForm.valid) {
      this._requestForm.add(this.serviceRequestForm.value).subscribe({
        next: (response: any) => {
          // Mensaje de éxito
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'El formulario se ha enviado correctamente',
            confirmButtonText: 'Aceptar',
          });
      
          // Reinicia el formulario
          this.serviceRequestForm.reset(); // Asegúrate de que `this.serviceRequestForm` sea un formulario reactivo o algo equivalente
        },
        error: (error: any) => {
          // Mensaje de error
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ocurrió un problema al realizar la operación.',
            footer: 'Por favor, inténtalo nuevamente.',
            confirmButtonText: 'Aceptar',
          });
        },
      })
      console.log('Form submitted:', this.serviceRequestForm.value);
      // Here you would typically send the data to the backend using HttpClient
    } else {
      console.log('Invalid form');
    }
  }

  redirectToWhatsAppWithNumber(message: string): void {
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

  onSectionSelected(section: string) {
    this.selectedSection = section;
    console.log("SECTION: ", section)
    if(section == "asistencias"){
      this.showServices = true;
      this.showInfo =false;
      this.showProducts = false;
    }else if( section == "servicios"){
      this.showServices = false;
      this.showInfo =false;
      this.showProducts = true;
    }else{
      this.showServices = false;
      this.showInfo =true;
      this.showProducts = false;
    }
  }

}
