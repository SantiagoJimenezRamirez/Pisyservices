import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ServicesComponent } from "../services/services.component";
import { GeneralComponent } from "../general/general.component";
import { ProductsComponent } from "../products/products.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ModalComponent } from "../modal/modal.component";
import { OtherServicesComponent } from "../../other-services/other-services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent, ServicesComponent, GeneralComponent, FooterComponent, OtherServicesComponent],
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
  

  ngOnInit(): void {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.texts.length;
    }, 10000); // Cambia el texto cada 10 segundos
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

  onSectionSelected(section: string) {
    this.selectedSection = section;
    console.log("SECTION: ", section)
    if(section == "servicios"){
      this.showServices = true;
      this.showInfo =false;
      this.showProducts = false;
    }else if( section == "productos"){
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
