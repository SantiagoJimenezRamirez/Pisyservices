import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MenuAdminComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

}
