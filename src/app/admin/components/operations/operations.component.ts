import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";
import { CommonModule } from '@angular/common';
import { OperationsAddComponent } from "../operations-add/operations-add.component";
import { OperationsService } from '../../../services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [MenuAdminComponent, MenuCelComponent, CommonModule, OperationsAddComponent],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss'
})
export class OperationsComponent implements OnInit{
  title = "Operations"
  isVisible = false;
  editOrAdd = 2;
  activeMenu: number | null = null; // To track which menu is active
  dataSource:any;
  data:any;

  constructor(private _operationsService: OperationsService){

  }

  ngOnInit(): void {
    this._operationsService.getAll().subscribe({
      next: (response: any) => {

      }
    })
  }

  recibeEvent($event:any){
    this.isVisible = $event;
  }

  reciveEmit(event: boolean){
    this.isVisible = event
  }

  toggleMenu(id: number, event: Event): void {
    event.stopPropagation();
    this.activeMenu = this.activeMenu === id ? null : id;
  }

  handleEdit(element: any): void {
    this.data = element;
    this.isVisible = true;
    console.log('Edit:', element);
  }

  deleteProduct(element:any){
    Swal.fire({
      title: 'Delete',
      text: `Surely you want to delete ${element.name}`,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    }).then((result:any) => {
      if (result.isConfirmed) {
           this._operationsService.delete(element.id).subscribe({
            next: (value:any) =>{
              
            }
           })
      }
    });
    console.log('Eliminar:', element);
  }

}
