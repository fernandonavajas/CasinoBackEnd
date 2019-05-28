import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, getRepository, createQueryBuilder, getConnection } from 'typeorm';
import { Usuario } from '../entitys/usuario.entity';
import { Injectable } from '@nestjs/common';
import { usuarioDto } from './usuario-dto';
import { Tokens } from 'src/entitys/tokens.entity';
import { TokensService } from 'src/tokens/tokens.service';
import { TokensController } from 'src/tokens/tokens.controller';

export class loginModel {
    rut: string;
    password: string;
}


@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>) { }


    async getAll(): Promise<Usuario[]> {
        return await this.usuariosRepository.find();
    }

    async getOne(idUsuario: number): Promise<Usuario> {
        const a: Usuario = await this.usuariosRepository.createQueryBuilder('usuario')
            .where('usuario.id = :id ', { id: idUsuario })
            .getOne();
        return await a;
    }
    //************************************          Login           ********************************** */
    async Loggin(auth: loginModel): Promise<any> {
        try {
            //console.log(auth.rut,typeof(parseInt(auth.rut)))
            //console.log(auth.password,typeof(auth.password))
            const usuario = await createQueryBuilder(Usuario, 'u')
                .select([
                    "u.id",
                    "u.nombre",
                    "u.rut",
                    "t.rol",
                    "t.api_key",
                ])
                .innerJoin("u.tokens", "t")
                .where("u.rut = :rut", { rut: parseInt(auth.rut) })
                .andWhere("t.pass = :pass", { pass: auth.password })
                .getOne();
            return await usuario;
        } catch (e) {
            return e;
        }
    }
    async createUser(usuarioNuevo: usuarioDto): Promise<Usuario> {
        const nuevo = new Usuario();
        nuevo.nombre = usuarioNuevo.nombre;
        nuevo.rut = usuarioNuevo.rut;// modificar para que sea correcto
        nuevo.empleados = usuarioNuevo.empleados;
        nuevo.correo = usuarioNuevo.correo;
        return await this.usuariosRepository.save(nuevo);
    }

    // nuevo metodo para ingresar usuario
    
    async crearusuarioyTokens(usuarioNuevo: usuarioDto): Promise<any[]> {
        return await getConnection().createEntityManager().query(
            `select * from crearusuario(${usuarioNuevo.rut},${usuarioNuevo.nombre},${usuarioNuevo.empleados},${usuarioNuevo.correo})`,
        )
    }

    async updateUsuario(idUsuario: number, usuarioActualizar: usuarioDto): Promise<Usuario> {
        const usuarioUpdate = await this.usuariosRepository.findOne(idUsuario);
        usuarioUpdate.nombre = usuarioActualizar.nombre;
        usuarioUpdate.empleados = usuarioActualizar.empleados;
        usuarioUpdate.rut = usuarioActualizar.rut;
        usuarioUpdate.correo = usuarioActualizar.correo;

        return await this.usuariosRepository.save(usuarioUpdate)
    }
    async deleteUsuario(idUsuario: number): Promise<any> {
        return await this.usuariosRepository.delete(idUsuario);
    }

    

}