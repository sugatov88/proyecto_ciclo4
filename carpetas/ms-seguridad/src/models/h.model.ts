import {Entity, model, property} from '@loopback/repository';

@model()
export class H extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  j?: string;


  constructor(data?: Partial<H>) {
    super(data);
  }
}

export interface HRelations {
  // describe navigational properties here
}

export type HWithRelations = H & HRelations;
