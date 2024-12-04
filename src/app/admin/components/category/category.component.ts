import { Component, HostListener, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from '../../../services/category.service';
import { CategoryAddComponent } from "../category-add/category-add.component";
import { CategoryEditComponent } from "../category-edit/category-edit.component";
import Swal from 'sweetalert2';
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MenuAdminComponent, ReactiveFormsModule, CommonModule, MatTableModule, MatIconModule, CategoryAddComponent, CategoryEditComponent, MenuCelComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  title = "Page Category";

  isVisible: boolean = false;
  showEdit = false;
  element:any;

  displayedColumns: string[] = ['actions', 'id', 'name', 'createdAt']; // Define las columnas
  dataSource = new MatTableDataSource<any>([]); // Fuente de datos para la tabla

  activeMenu: number | null = null; // Para controlar los menús desplegables

  constructor( private _categoryService : CategoryService) {

  }
  ngOnInit(): void {
    this._categoryService.getCategories().subscribe({
      next: (response: any) => {
        console.log(response);
        this.dataSource.data = response.categories; // Asigna los datos a la tabla
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  openModal() {
    this.isVisible = true;
  }
  
    // Muestra u oculta el menú desplegable
    toggleMenu(id: number, event: MouseEvent): void {
      event.stopPropagation();
      this.activeMenu = this.activeMenu === id ? null : id;
    }
  
    // Escucha clics globales en la página
    @HostListener('document:click', ['$event'])
    closeMenu(): void {
      this.activeMenu = null;
    }
  
    // Maneja la acción de editar y cierra el menú
    handleEdit(element: any): void {
      this.closeMenu()
      this.editElement(element);
    }
  
    // Maneja la acción de eliminar y cierra el menú
    handleDelete(element: any): void {
      this.deleteElement(element);
      this.closeMenu();
    }
  
    // Función de ejemplo para editar un elemento
    editElement(element: any): void {
      this.element = element;
      this.closeMenu()
      this.showEdit = true;
    }
  
    // Función de ejemplo para eliminar un elemento
    deleteElement(element: any): void {
      Swal.fire({
        title: 'Delete',
        text: `Surely you want to delete ${element.name}`,
        icon: 'info',
        confirmButtonText: 'Aceptar'
      }).then((result:any) => {
        if (result.isConfirmed) {
             this._categoryService.deleteCategory(element.id).subscribe({
              next: (value:any) =>{
                
              }
             })
        }
      });
      console.log('Eliminar:', element);
    }
  
  receiveEvent(event:any, number: number){
    if(number == 1){
      this.isVisible = event;
    }
    if(number == 2){
      this.showEdit = event
    }
  }

}
