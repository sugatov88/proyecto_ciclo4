import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquilerRoutingModule } from './alquiler-routing.module';
import { AsignarVehiculoComponent } from './asignar-vehiculo/asignar-vehiculo.component';


@NgModule({
  declarations: [
    AsignarVehiculoComponent
  ],
  imports: [
    CommonModule,
    AlquilerRoutingModule
  ]
})
export class AlquilerModule { }
