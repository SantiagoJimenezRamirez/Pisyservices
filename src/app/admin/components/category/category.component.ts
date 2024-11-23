import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MenuAdminComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
