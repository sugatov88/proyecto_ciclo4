import {Entity, model, property} from '@loopback/repository';

@model()
export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaAlquiler: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaRegreso: string;

  @property({
    type: 'number',
    required: true,
  })
  precioAlquiler: number;

  @property({
    type: 'string',
  })
  alquilerVehiculoId?: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
