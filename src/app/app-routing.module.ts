import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './vistas/login/login.component';
//Table 1
import { DashboardEmpleadosComponent} from './vistas/dashboard-empleados/dashboard-empleados.component';
import { EditarEmpleadosComponent} from './vistas/editar-empleados/editar-empleados.component';
import { NuevoEmpleadosComponent } from './vistas/nuevo-empleados/nuevo-empleados.component';
//Table 2
import { DashboardAutosComponent } from './vistas/dashboard-autos/dashboard-autos.component';
import { EditarAutosComponent } from './vistas/editar-autos/editar-autos.component';
import { NuevoAutosComponent } from './vistas/nuevo-autos/nuevo-autos.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboardemp', component: DashboardEmpleadosComponent},
  {path: 'nuevoemp', component: NuevoEmpleadosComponent},
  {path: 'editaremp/:id', component: EditarEmpleadosComponent},
  {path: 'dashboardautos', component: DashboardAutosComponent},
  {path: 'nuevoautos', component: NuevoAutosComponent},
  {path: 'editarautos/:id', component: EditarAutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, DashboardEmpleadosComponent, NuevoEmpleadosComponent, EditarEmpleadosComponent, DashboardAutosComponent, NuevoAutosComponent, EditarAutosComponent]
