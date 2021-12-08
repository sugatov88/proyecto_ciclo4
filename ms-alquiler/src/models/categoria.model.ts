import {Entity, model, property, hasMany} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';
import {CategoriVehiculo} from './categori-vehiculo.model';

@model()
export class Categoria extends Entity {
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
  nombre: string;

  @hasMany(() => Vehiculo, {through: {model: () => CategoriVehiculo}})
  vehiculos: Vehiculo[];

  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;
