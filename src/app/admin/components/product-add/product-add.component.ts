import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent implements OnInit {
  @Output() modal = new EventEmitter<boolean>();

  productForm: FormGroup;
  isModalOpen = false; // Controla el estado del modal
  selectedFile: File | null = null; // Imagen seleccionada
  categories:any;

  constructor(private fb: FormBuilder, private productService:ProductService, private _categoryServices: CategoryService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      description: ['', Validators.required],
      imagePath: [null],
    });
  }
  ngOnInit(): void {
    this._categoryServices.getCategories().subscribe({
      next : (response:any) => {
        this.categories = response.categories;
      }
    })

  }

  // Cerrar el modal
  closeModal(): void {
    this.modal.emit(false)
  }

  // Manejar cambio de archivo
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      console.log('Archivo seleccionado:', this.selectedFile); // Depuración
      this.productForm.patchValue({ imagePath: this.selectedFile });
    }
  }
  

  // Enviar formulario
  onSubmit(): void {
    if (this.productForm.invalid || !this.selectedFile) {
      console.error('Formulario inválido o archivo no seleccionado');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('category', this.productForm.get('category')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('description', this.productForm.get('description')?.value);
    formData.append('image', this.selectedFile);

    this.productService.createProduct(formData).subscribe({
      next: (response:any) => {
        Swal.fire({
          title: 'Succescfull',
          text: 'Form Succes',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result:any) => {
          if (result.isConfirmed) {
          }
        });
        this.isModalOpen = false;

      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Ocurrió un problema al realizar la operación.',
          footer: 'Por favor, inténtalo nuevamente.',
          confirmButtonText: 'Aceptar',
        });
      },
    });
  }
}
