import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { CommonModule } from '@angular/common';
import { RequestFormService } from '../../../services/request-form.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";

@Component({
  selector: 'app-service-request',
  standalone: true,
  imports: [MenuAdminComponent, CommonModule, MatIconModule, MatTableModule, MenuCelComponent],
  templateUrl: './service-request.component.html',
  styleUrl: './service-request.component.scss'
})
export class ServiceRequestComponent {
  title = "page request help"
  displayedColumns: string[] = ['id', 'name', 'email', 'message', 'createdAt'];
  dataSource: any;
  data : any;
  activeMenu: number | null = null;

  constructor(private _requestService : RequestFormService){

  }

  ngOnInit(): void {
    this._requestService.getAll().subscribe({
      next: (response:any) =>{
        this.data = response;
        this.dataSource = new MatTableDataSource(this.data);
      }
    })
  }

  toggleMenu(id: number): void {
    this.activeMenu = this.activeMenu === id ? null : id;
    setTimeout(() => {}, 0); // Ayuda a detectar cambios en el DOM
  }
  
  

  editElement(element: any): void {
    console.log('Editando elemento:', element);
    this.activeMenu = null; // Cierra el menú después de editar
  }

  deleteElement(element: any): void {
    console.log('Eliminando elemento:', element);
    this.activeMenu = null; // Cierra el menú después de eliminar
  }

}
