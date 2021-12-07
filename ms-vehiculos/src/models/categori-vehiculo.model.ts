import {Entity, model, property} from '@loopback/repository';

@model()
export class CategoriVehiculo extends Entity {
  @property({
    type: 'String',
    id: true,
    generated: true,
  })
  id?: String;

  @property({
    type: 'String',
  })
  vehiculoId?: String;

  @property({
    type: 'String',
  })
  categoriaId?: String;

  constructor(data?: Partial<CategoriVehiculo>) {
    super(data);
  }
}

export interface CategoriVehiculoRelations {
  // describe navigational properties here
}

export type CategoriVehiculoWithRelations = CategoriVehiculo & CategoriVehiculoRelations;
