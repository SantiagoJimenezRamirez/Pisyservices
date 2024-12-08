import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperationsService } from '../../../services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operations-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './operations-add.component.html',
  styleUrl: './operations-add.component.scss'
})
export class OperationsAddComponent {
  
  @Output() modal = new EventEmitter<boolean>();
  @Input() editOrAdd: boolean = true;
  detailsForm: FormGroup;


  constructor(private fb: FormBuilder, private _operationServices : OperationsService) {
    this.detailsForm = this.fb.group({
      operation: ['', Validators.required],
      description: ['', Validators.required],
      image: [null]
    });
  }

  submitForm() {
    if (this.detailsForm.valid) {
      const formData = this.detailsForm.value;
      this._operationServices.add(formData).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Service Added!',
            text: 'The operation has been successfully added.',
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
            text: 'An error occurred while adding the operation. Please try again.',
            icon: 'error',
            confirmButtonText: 'Accept',
          });
        }
      })
    }
  }

  closeModal() {
    this.modal.emit(false)
  }

}
