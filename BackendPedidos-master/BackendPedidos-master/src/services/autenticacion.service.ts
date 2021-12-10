import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import {Llaves} from '../config/llaves';
import { Usuario } from '../models'
import {UsuarioRepository} from '../repositories';

const generator =require("password-generator");
const cryptoJS = require ("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuariorepository:UsuarioRepository
  ) {}

  /*
   * Add service methods here
   */

  GenerarClave(){
    let clave= generator(8,false);
    return clave;
  }
  CifrarClave(clave:string){
    let clavecifrada =cryptoJS.MD5(clave).toString();
    return clavecifrada;
  }
  IdentificarUsuario(usuario: string, clave:string ){
    try{
      let p= this.usuariorepository.findOne({where:{correo: usuario, clave:clave}}) //buscar y validar el usuario
      if(p){
        return p;
      }
      return false;
    }catch{
      return false;
    }

  }
  GenerarTokenJWT(usuario:Usuario){
    let token = jwt.sign({
      data:{
     id: usuario.id,
     correo:usuario.correo,
     nombre: usuario.nombres + " " +usuario.apellidos
      }
    },
    Llaves.claveJWT);
    return token;
  }
  validarTokenJWT(token: string){
    try{
      let datos=jwt.verify(token,Llaves.claveJWT);
      return datos;
      }catch{
        return false;
    }
  }
}
