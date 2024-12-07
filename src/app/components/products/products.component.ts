import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: any[] = []; // Lista de categorías únicas

  constructor(private productService: ProductService, private _categoriesServices: CategoryService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.filteredProducts = response.products;
      }
    });
    this._categoriesServices.getCategories().subscribe({
      next: (response: any) => {
        this.categories.push(...response.categories);
          }
        });
    console.log(this.categories)
  }

  filterProducts(category: string): void {
    this.filteredProducts = category
      ? this.products.filter((product: any) => product.category === category)
      : this.products;
  }

  confirmProductInterest(product: any) {
    Swal.fire({
      title: '¿Desea consultar con la empresa sobre este producto?',
      text: `Producto: ${product.name}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, contactar',
      cancelButtonText: 'No, gracias',
    }).then(result => {
      if (result.isConfirmed) {
        const message = `Estoy interesado en el producto: ${product.name}`;
        const phoneNumber = '+1 3478991749'; // Sustituye con el número de WhatsApp de la empresa.
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
    });
  }
}
