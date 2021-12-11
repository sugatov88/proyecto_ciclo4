import {Entity, model, property, belongsTo, } from '@loopback/repository';
import {Marca} from './marca.model';
import {Categoria} from './categoria.model';
import {hasMany} from '@loopback/repository';
import {Fotos} from './fotos.model';
import {AlquilerVehiculo} from './alquiler-vehiculo.model';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'String',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;


  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @belongsTo(() => Marca)
  marcaId: String;

  @belongsTo(() => Categoria)
  categoriaId: string;

  @hasMany(() => AlquilerVehiculo)
  alquilerVehiculos: AlquilerVehiculo[];

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
