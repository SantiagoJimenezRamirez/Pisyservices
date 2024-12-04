import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.scss'
})
export class CategoryEditComponent {
  @Input() object:any;
  @Output() isVisible = new EventEmitter<boolean>();
  nameForm: FormGroup;
  
  constructor(private fb: FormBuilder, private _categoryService : CategoryService) {
    this.nameForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  ngOnInit(): void {
    this.nameForm.patchValue({
      name: this.object.name,
    });
  }

  submitForm() {
    if (this.nameForm.valid) {
      const name = this.nameForm.value.name;
      this._categoryService.updateCategory(Number(this.object.id), name).subscribe({
        next: (response:any) =>{
          console.log(response)
        }
      })

      console.log('Name submitted:', name);
      this.closeModal();
    }
  }

  closeModal() {
    this.isVisible.emit(false);
  }

}
