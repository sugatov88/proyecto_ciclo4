import {Entity, model, property, belongsTo} from '@loopback/repositoriy';
import {Marca} from './marca.model';
import {Categoria} from './categoria.model';
import {hasMany} from '@loopback/repository';
import {CategoriVehiculo} from './categori-vehiculo.model';
import {Fotos} from './fotos.model';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

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
  marcaId: number;

  @hasMany(() => Categoria, {through: {model: () => CategoriVehiculo}})
  categorias: Categoria[];

  @hasMany(() => Fotos)
  fotos: Fotos[];

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
