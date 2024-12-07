import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { InventoryComponent } from './admin/components/inventory/inventory.component';
import { ViewComponent } from './admin/components/view/view.component';
import { CategoryComponent } from './admin/components/category/category.component';
import { HomeEsComponent } from './components/home-es/home-es.component';
import { ServiceRequestComponent } from './admin/components/service-request/service-request.component';
import { LoginGuard } from './guards/login-guard.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'pruebas', component: ProductsComponent },
    { path: 'home/es', component: HomeEsComponent },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'request', component: ServiceRequestComponent, canActivate: [AuthGuard] },
    { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
    { path: 'view', component: ViewComponent, canActivate: [AuthGuard] },
    { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/home' },
  ];