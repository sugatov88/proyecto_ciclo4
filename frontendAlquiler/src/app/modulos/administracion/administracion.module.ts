import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { ModificarAsesorComponent } from './asesor/modificar-asesor/modificar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { ModificarVehiculoComponent } from './vehiculo/modificar-vehiculo/modificar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { ModificarAdministradorComponent } from './administrador/modificar-administrador/modificar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    BuscarClienteComponent,
    ModificarClienteComponent,
    EliminarClienteComponent,
    CrearAsesorComponent,
    BuscarAsesorComponent,
    ModificarAsesorComponent,
    EliminarAsesorComponent,
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    ModificarVehiculoComponent,
    EliminarVehiculoComponent,
    CrearAdministradorComponent,
    BuscarAdministradorComponent,
    ModificarAdministradorComponent,
    EliminarAdministradorComponent
  ],
  imports: [
    CommonModule, 
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }