import {AuthenticationStrategy} from '@loopback/authentication'
import { request } from 'http';
import {HttpErrors, Request } from '@loopback/rest';
import {UserProfile } from'@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {parse} from 'path';
import {service} from '@loopback/core';
import {AutenticacionService} from '../services';

export class EstrategiaAdministrador implements AuthenticationStrategy{
  name: string ='admin';

    constructor(
      @service(AutenticacionService)
      public serviceAutentication: AutenticacionService
    ){

    }

  async authenticate(request: Request): Promise<UserProfile | undefined>{
    let token =parseBearerToken(request);
  if(token)
  {
      let datos = this.serviceAutentication.validarTokenJWT(token);
      if(datos)
      {
        let perfil: UserProfile= Object.assign({
          nombre: datos.data.nombre
        });
        return perfil;

      }else
      {
      throw new HttpErrors[401]("El token incluido no es valida, pilas");
        }

  }else{
    throw new HttpErrors[401]("No hay token en su solicitud, revise");
  }
}
}
