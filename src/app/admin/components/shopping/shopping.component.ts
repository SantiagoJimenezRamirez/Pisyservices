import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [MenuAdminComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {

}
