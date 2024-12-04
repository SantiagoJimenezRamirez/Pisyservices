import { Component } from '@angular/core';
import { MenuAdminComponent } from "../../../shared/menu-admin/menu-admin.component";
import { MenuCelComponent } from "../../../shared/menu-cel/menu-cel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-admin',
  standalone: true,
  imports: [MenuAdminComponent, MenuCelComponent, CommonModule],
  templateUrl: './services-admin.component.html',
  styleUrl: './services-admin.component.scss'
})
export class ServicesAdminComponent {
  title = "";
  isVisible = false;

}
