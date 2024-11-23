import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { InventoryComponent } from './admin/components/inventory/inventory.component';
import { ViewComponent } from './admin/components/view/view.component';
import { CategoryComponent } from './admin/components/category/category.component';
import { ShoppingComponent } from './admin/components/shopping/shopping.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a /login en la ruta raíz
    // { path: 'pruebas', component: ,  },
    { path: 'home', component: HomeComponent, },  
    { path: 'login', component: LoginComponent, },  
    { path: 'dashboard', component: DashboardComponent, },  
    { path: 'inventory', component: InventoryComponent, },  
    { path: 'view', component: ViewComponent, },  
    { path: 'category', component: CategoryComponent, },  
    { path: 'shopping', component: ShoppingComponent, },  
]