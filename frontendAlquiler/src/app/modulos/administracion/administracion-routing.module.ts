import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { ModificarAsesorComponent } from './asesor/modificar-asesor/modificar-asesor.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {
    path:'crear-asesor',
    component:CrearAsesorComponent
  },
  {
    path:'modificar-asesor',
    component: ModificarAsesorComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
