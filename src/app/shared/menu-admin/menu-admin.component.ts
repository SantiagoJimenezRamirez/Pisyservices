import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss'
})
export class MenuAdminComponent {
  section = ["dashboard", "inventory", "view", "category", "request", "services", "operations"]
  sectionInfo = ["log-out"]
  selectedItem: string | null = null;

  constructor(private router: Router,
              private _titleService: TitleService,
  ){

  }
  getSvg(name: string){
    return `svg/${name}.svg`
  }

  redirectTo(item: string) {
    this._titleService.titleWindow(item)
    this.router.navigate([`/${item.toLowerCase()}`]); // Navega a la ruta correspondiente
  }
}
