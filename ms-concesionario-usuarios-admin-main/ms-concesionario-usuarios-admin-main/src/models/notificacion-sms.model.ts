import {Model, model, property} from '@loopback/repository';

@model()
export class NotificacionSms extends Model {
  @property({
    type: 'string',
    required: true,
  })
  destino: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;


  constructor(data?: Partial<NotificacionSms>) {
    super(data);
  }
}

export interface NotificacionSmsRelations {
  // describe navigational properties here
}

export type NotificacionSmsWithRelations = NotificacionSms & NotificacionSmsRelations;
