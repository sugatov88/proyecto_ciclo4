import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';


@model()
export class NuevoUsuario extends Entity {
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
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;
  @property({
    type: 'string',
    required: false,
  })
  clave: string;



  constructor(data?: Partial<NuevoUsuario>) {
    super(data);
  }
}

export interface NuevoUsuarioRelations {
  // describe navigational properties here
}

export type NuevoUsuarioWithRelations = NuevoUsuario & NuevoUsuarioRelations;
