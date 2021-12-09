import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Factura} from './factura.model';
import {Vehiculo} from './vehiculo.model';

@model()
export class AlquilerVehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  placaVehiculo: string;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @property({
    type: 'string',
  })
  clienteId?: string;


  @belongsTo(() => Vehiculo)
  vehiculoId: String;

  @hasOne(() => Factura)
  factura: Factura;

  constructor(data?: Partial<AlquilerVehiculo>) {
    super(data);
  }
}

export interface AlquilerVehiculoRelations {
  // describe navigational properties here
}

export type AlquilerVehiculoWithRelations = AlquilerVehiculo & AlquilerVehiculoRelations;
