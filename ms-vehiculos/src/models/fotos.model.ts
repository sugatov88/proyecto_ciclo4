import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';

@model()
export class Fotos extends Entity {
  @property({
    type: 'String',
    id: true,
    generated: true,
  })
  id?: String;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @belongsTo(() => Vehiculo)
  vehiculoId: String;

  constructor(data?: Partial<Fotos>) {
    super(data);
  }
}

export interface FotosRelations {
  // describe navigational properties here
}

export type FotosWithRelations = Fotos & FotosRelations;
