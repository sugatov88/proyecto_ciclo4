import {Entity, model, property, hasMany} from '@loopback/repository';


@model()
export class Marca extends Entity {
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


  constructor(data?: Partial<Marca>) {
    super(data);
  }
}

export interface MarcaRelations {
  // describe navigational properties here
}

export type MarcaWithRelations = Marca & MarcaRelations;
