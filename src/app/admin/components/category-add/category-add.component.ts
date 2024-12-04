import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent implements OnInit{
  nameForm: FormGroup;
  @Output() isVisible = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private _categoryService : CategoryService) {
    this.nameForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  ngOnInit(): void {
    
  }

  submitForm() {
    if (this.nameForm.valid) {
      const name = this.nameForm.value.name;
      this._categoryService.createCategory(name).subscribe({
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
