import {Entity, model, property} from '@loopback/repository';

@model()
export class CategoriVehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  vehiculoId?: number;

  @property({
    type: 'number',
  })
  categoriaId?: number;

  constructor(data?: Partial<CategoriVehiculo>) {
    super(data);
  }
}

export interface CategoriVehiculoRelations {
  // describe navigational properties here
}

export type CategoriVehiculoWithRelations = CategoriVehiculo & CategoriVehiculoRelations;
