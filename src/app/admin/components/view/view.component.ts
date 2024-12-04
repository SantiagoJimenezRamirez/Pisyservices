import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeviceInfoService } from '../../../services/device-info.service';
import { MatMenuModule } from '@angular/material/menu';
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MenuAdminComponent, CommonModule, MatIconModule, MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule, MenuCelComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit{
  title = "page views"
  displayedColumns: string[] = ['id', 'userAgent', 'browser', 'device', 'os', 'createdAt'];
  dataSource: any;
  data : any;
  activeMenu: number | null = null;

  constructor(private _sessionService : DeviceInfoService){

  }

  ngOnInit(): void {
    this._sessionService.getAll().subscribe({
      next: (response:any) =>{
        this.data = response?.session || [];
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
