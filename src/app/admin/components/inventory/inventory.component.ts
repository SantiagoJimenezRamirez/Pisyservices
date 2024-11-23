import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [MenuAdminComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {

}
