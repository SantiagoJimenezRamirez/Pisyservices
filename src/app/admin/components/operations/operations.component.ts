import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";
import { CommonModule } from '@angular/common';
import { OperationsAddComponent } from "../operations-add/operations-add.component";

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [MenuAdminComponent, MenuCelComponent, CommonModule, OperationsAddComponent],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss'
})
export class OperationsComponent {
  title = "Operations"
  isVisible = false;
  editOrAdd = 2;

  recibeEvent($event:any){
    this.isVisible = $event;
  }

  reciveEmit(event: boolean){
    this.isVisible = event
  }


}
