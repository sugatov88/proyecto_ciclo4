import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {AlquilerVehiculo} from './alquiler-vehiculo.model';
import {UsuarioAsesor} from './usuario-asesor.model';

@model()
export class Asesor extends Entity {
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
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @hasMany(() => AlquilerVehiculo)
  alquilerVehiculos: AlquilerVehiculo[];

  @hasOne(() => UsuarioAsesor)
  usuarioAsesor: UsuarioAsesor;

  constructor(data?: Partial<Asesor>) {
    super(data);
  }
}

export interface AsesorRelations {
  // describe navigational properties here
}

export type AsesorWithRelations = Asesor & AsesorRelations;