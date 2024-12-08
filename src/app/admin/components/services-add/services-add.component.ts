import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../../services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './services-add.component.html',
  styleUrl: './services-add.component.scss'
})
export class ServicesAddComponent implements OnInit {

  @Input() editOrAdd:number = 1;
  @Input() id:number = 0;
  @Output() modal = new EventEmitter<boolean>();
  title:string = "";

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private _servicesServices: ServicesService) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    if (this.editOrAdd == 1){
      this.title = "Add product"
    }
    else{
      this.title = "Edit product"
      this._servicesServices.getById(this.id).subscribe({
        next: (res:any) => {
          this.productForm.patchValue({
            title: res.title,
            description: res.description
            });
            },
      })
      }
  }

  onSubmit(): void {
    if (this.editOrAdd == 1){
      this._servicesServices.add(this.productForm.value).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: 'Service Added!',
            text: 'The service has been successfully added.',
            icon: 'success',
            confirmButtonText: 'Accept',
          }).then((result) => {
            if (result.isConfirmed) {
              this.closeModal()
            }
          });
        },
        error: (err: any) => {
          Swal.fire({
            title: 'Error',
            text: 'An error occurred while adding the service. Please try again.',
            icon: 'error',
            confirmButtonText: 'Accept',
          });
        }
      });
      
    }
    else{
      this._servicesServices.edit(this.id, this.productForm).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: 'Service Edit!',
            text: 'The service has been successfully Edit.',
            icon: 'success',
            confirmButtonText: 'Accept',
          }).then((result) => {
            if (result.isConfirmed) {
              this.closeModal()
            }
          });
        },
        error: (err: any) => {
          Swal.fire({
            title: 'Error',
            text: 'An error occurred while Edit the service. Please try again.',
            icon: 'error',
            confirmButtonText: 'Accept',
          });
        }
      })
      }
  }

  closeModal(): void {
    this.modal.emit(false)
    console.log('Modal closed');
  }
}
