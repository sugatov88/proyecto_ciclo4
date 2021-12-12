import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Credenciales, NuevoUsuario} from '../models';
import {NuevoUsuarioRepository} from '../repositories';
import { AutenticacionService } from '../services';
import {Llaves} from '../config/llaves';
const fetch = require('node-fetch')

export class NuevoUsuarioController {
  constructor(
    @repository(NuevoUsuarioRepository)
    public nuevoUsuarioRepository : NuevoUsuarioRepository,
  @service(AutenticacionService)
  public serviceAutenticacion: AutenticacionService
    ) {}

    @post("/identificarNuevoUsuario",{
      responses:{
        '200':{
          description:"Identificacion de Nuevo Usuarios"
        }
    }
    } )

    async identificarNuevoUsuario(
      @requestBody() credenciales: Credenciales

    ){
      let p = await this.serviceAutenticacion.IdentificarNuevoUsuario(credenciales.usuario,credenciales.clave);
      if(p){
        let token = this.serviceAutenticacion.GenerarTokenJWT(p);
        return{
          datos: {
            nombre: p.nombres,
            correo: p.correo,
            id: p.id
          },
          tk:token
        }
      }else {
        throw new  HttpErrors[401]("Datos Invalidos Pilo ");
      }

    }


  @post('/nuevo-usuarios')
  @response(200, {
    description: 'NuevoUsuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(NuevoUsuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NuevoUsuario, {
            title: 'NewNuevoUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    nuevoUsuario: Omit<NuevoUsuario, 'id'>,
  ): Promise<NuevoUsuario> {


    let clave= this.serviceAutenticacion.GenerarClave();
    let claveCifrada =this.serviceAutenticacion.CifrarClave(clave);
    nuevoUsuario.clave=claveCifrada;
   let p = await  this.nuevoUsuarioRepository.create(nuevoUsuario);
  //notificar usuario
  let destino= nuevoUsuario.correo;
  let asunto="Registro prueba";
  let contenido = `Hola mensaje para ${nuevoUsuario.nombres}, su usuario es ${nuevoUsuario.correo} y su contraseña es ${clave}`;

  fetch(`${Llaves.usrServicioNotificaciones}/envio_correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
  .then((data:any)=>{
  console.log(data);
  })
  return p;


  }

  @get('/nuevo-usuarios/count')
  @response(200, {
    description: 'NuevoUsuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(NuevoUsuario) where?: Where<NuevoUsuario>,
  ): Promise<Count> {
    return this.nuevoUsuarioRepository.count(where);
  }

  @get('/nuevo-usuarios')
  @response(200, {
    description: 'Array of NuevoUsuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(NuevoUsuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(NuevoUsuario) filter?: Filter<NuevoUsuario>,
  ): Promise<NuevoUsuario[]> {
    return this.nuevoUsuarioRepository.find(filter);
  }

  @patch('/nuevo-usuarios')
  @response(200, {
    description: 'NuevoUsuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NuevoUsuario, {partial: true}),
        },
      },
    })
    nuevoUsuario: NuevoUsuario,
    @param.where(NuevoUsuario) where?: Where<NuevoUsuario>,
  ): Promise<Count> {
    return this.nuevoUsuarioRepository.updateAll(nuevoUsuario, where);
  }

  @get('/nuevo-usuarios/{id}')
  @response(200, {
    description: 'NuevoUsuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(NuevoUsuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(NuevoUsuario, {exclude: 'where'}) filter?: FilterExcludingWhere<NuevoUsuario>
  ): Promise<NuevoUsuario> {
    return this.nuevoUsuarioRepository.findById(id, filter);
  }

  @patch('/nuevo-usuarios/{id}')
  @response(204, {
    description: 'NuevoUsuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NuevoUsuario, {partial: true}),
        },
      },
    })
    nuevoUsuario: NuevoUsuario,
  ): Promise<void> {
    await this.nuevoUsuarioRepository.updateById(id, nuevoUsuario);
  }

  @put('/nuevo-usuarios/{id}')
  @response(204, {
    description: 'NuevoUsuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() nuevoUsuario: NuevoUsuario,
  ): Promise<void> {
    await this.nuevoUsuarioRepository.replaceById(id, nuevoUsuario);
  }

  @del('/nuevo-usuarios/{id}')
  @response(204, {
    description: 'NuevoUsuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.nuevoUsuarioRepository.deleteById(id);
  }
}
