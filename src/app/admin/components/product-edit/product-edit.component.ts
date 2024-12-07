import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {
  @Input() data:any;
  @Output() close = new EventEmitter<boolean>();
  isModalOpen = true; // Controla la visibilidad del modal
  productForm: FormGroup;
  categories:any;

  constructor(private fb: FormBuilder, private _productService:ProductService, private _categoryServices: CategoryService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.data) {
      // Asignar los valores al formulario
      this.productForm.patchValue({
        name: this.data.name || '',
        price: this.data.price || 0,
        description: this.data.description || '',
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.close.emit(false)
    this.productForm.reset(); // Opcional: limpiar el formulario al cerrar
  }

  onSubmit() {
    if (this.productForm.valid) {
      this._productService.update(this.productForm.value, Number(this.data.id)).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: 'Succescfull',
            text: 'Product Update',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result:any) => {
            if (result.isConfirmed) {
            }
            this.closeModal()
          });
        },
        error: (erro:any) =>{
          console.log(erro)
        }
      })

      this._categoryServices.getCategories().subscribe({
        next : (response:any) => {
          this.categories = response.categories;
        }
      })
      console.log('Form Submitted:', this.productForm.value);
      this.closeModal();
    }
  }
}
