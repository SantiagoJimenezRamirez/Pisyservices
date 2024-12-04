import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { ProductAddComponent } from "../product-add/product-add.component";
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";
import { ProductEditComponent } from "../product-edit/product-edit.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [MenuAdminComponent, ProductAddComponent, CommonModule, MenuCelComponent, ProductEditComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit{
  openModal = false;
  openEditModal = false;
  activeMenu: number | null = null; // To track which menu is active
  dataSource:any;
  data:any;

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (response:any) =>{
        this.dataSource = response.products
      }
    })
  }

  reciveEvent(event:boolean){
    this.openModal = event;
  }
  reciveEditEvent(event:boolean){
    this.openEditModal = event;
  }
  toggleMenu(id: number, event: Event): void {
    event.stopPropagation();
    this.activeMenu = this.activeMenu === id ? null : id;
  }

  handleEdit(element: any): void {
    this.data = element;
    this.openEditModal = true;
    console.log('Edit:', element);
    // Logic for editing the product
  }

  deleteProduct(element:any){
    Swal.fire({
      title: 'Delete',
      text: `Surely you want to delete ${element.name}`,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    }).then((result:any) => {
      if (result.isConfirmed) {
           this.productService.delete(element.id).subscribe({
            next: (value:any) =>{
              
            }
           })
      }
    });
    console.log('Eliminar:', element);
  }

}
