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
    type: 'string',
  })
  categoriId?: string;

  @property({
    type: 'String',
  })
  vehiculoId?: String;

  @property({
    type: 'string',
  })
  categoriaId?: string;

  constructor(data?: Partial<CategoriVehiculo>) {
    super(data);
  }
}

export interface CategoriVehiculoRelations {
  // describe navigational properties here
}

export type CategoriVehiculoWithRelations = CategoriVehiculo & CategoriVehiculoRelations;
