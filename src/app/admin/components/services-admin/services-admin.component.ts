import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";
import { CommonModule } from '@angular/common';
import { ServicesAddComponent } from "../services-add/services-add.component";
import { ServicesService } from '../../../services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services-admin',
  standalone: true,
  imports: [MenuAdminComponent, MenuCelComponent, CommonModule, ServicesAddComponent],
  templateUrl: './services-admin.component.html',
  styleUrl: './services-admin.component.scss'
})
export class ServicesAdminComponent implements OnInit {

  title = "Services Admin"
  isVisible = false;
  editOrAdd = 1;
  id: number = 0;
  data:any;
  activeMenu: number | null = null; // To track which menu is active


  constructor(private _servicesServices: ServicesService){

  }

  ngOnInit(): void {
    this._servicesServices.getAll().subscribe({
      next: (data) => {
        this.data = data
        console.log(data)
        },
    })
  }

  recibeEvent($event:any){
    this.isVisible = $event;
  }

  reciveEditEvent(event:boolean){
    this.isVisible = event;
  }
  toggleMenu(id: number, event: Event): void {
    event.stopPropagation();
    this.activeMenu = this.activeMenu === id ? null : id;
  }

  handleEdit(element: any): void {

    this.id = element.id
    this.editOrAdd = 2
    this.isVisible = true;
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
           this._servicesServices.delete(element.id).subscribe({
            next: (value:any) =>{
              
            }
           })
      }
    });
    console.log('Eliminar:', element);
  }
}
