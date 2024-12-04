import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-other',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-other.component.html',
  styleUrl: './services-other.component.scss'
})
export class ServicesOtherComponent {
  data: any[] = [];

  constructor(private dataService: ProductService) {}

  ngOnInit(): void {
    this.dataService.getAllWithImg().subscribe((response:any) => {
      this.data = response.products; 
    });
  }

  formatNumberWithThousandsSeparator(num: number): string {
    if (isNaN(num)) {
      throw new Error("El valor proporcionado no es un número válido.");
    }
  
    return num.toLocaleString("en-US"); // Usa el separador de miles basado en la configuración regional "en-US"
  }
}
