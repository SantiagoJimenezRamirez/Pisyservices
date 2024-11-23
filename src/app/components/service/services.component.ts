import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  service = [
    {
      title: "Post-treatment Solutions",
      description: "Comprehensive solutions for all issues related to DEF, ADBLUE, EGR, DPF, SCR, and VGT systems. This service addresses maintenance, repairs, and optimization of these critical post-treatment components to ensure efficient emission control and compliance.",
      color: '#E5E5E5'
    },
    {
      title: "Electronic Diagnostics (Check Engine)",
      description: "Advanced electronic diagnostic services to identify and resolve Check Engine light issues. Our team uses cutting-edge diagnostic tools to detect and fix electronic faults in vehicles, ensuring optimal performance and preventing potential breakdowns.",
      color: '#B3B3B3'
    },
    {
      title: "Engine Power Enhancement",
      description: "Professional tuning and power enhancement services for both diesel and gasoline engines. This service aims to increase engine efficiency and power output, tailored to your vehicle's specific needs and performance goals.",
      color: '#808080'
    },
    {
      title: "Wheel Alignment and Balancing",
      description: "Precision alignment and balancing for lightweight vehicles to ensure a smooth and safe driving experience. This service enhances tire longevity, improves fuel efficiency, and ensures vehicle stability.",
      color: '#4D4D4D'
    },
    {
      title: "Suspension Repair and General Mechanics",
      description: "Comprehensive mechanical services, including suspension repairs, to keep your vehicle in top condition. Our team provides maintenance and repairs to ensure vehicle safety, stability, and optimal handling on the road.",
      color: '#1A1A1A'
    }
  ];

  selectedService: { title: string; description: string; color:string } | null = null;

  selectService(service: any) {
    this.selectedService = null;
    this.selectedService = service;
    this.cdr.detectChanges(); // Fuerza la detección de cambios para que el HTML se actualice
  }

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

}
