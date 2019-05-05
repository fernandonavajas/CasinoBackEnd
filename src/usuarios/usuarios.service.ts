import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, getRepository, createQueryBuilder } from 'typeorm';
import { Usuario } from '../entitys/usuario.entity';
import { Injectable } from '@nestjs/common';
import { usuarioDto } from './usuario-dto';
import { getConnection } from "typeorm";

export class loginModel {
    rut: string;
    password: string;
}


@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>, ) { }

    
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
        //***Validar Rut y seguir *****/
        console.log('aqui');
        const usuario = await createQueryBuilder()
            .select("usuario")
            .from(Usuario, "usuario")
            .leftJoinAndSelect("usuario.tokens", "tokens")
            .where("usuario.rut = :rut", { rut:parseInt(auth.rut) })
            .getOne();
        return await usuario;

    }
    async createUser(usuarioNuevo: usuarioDto): Promise<Usuario> {
        const nuevo = new Usuario();
        nuevo.nombre = usuarioNuevo.nombre;
        nuevo.rut = usuarioNuevo.rut;// modificar para que sea correcto
        nuevo.empleados = usuarioNuevo.empleados;
        nuevo.correo = usuarioNuevo.correo;

        return await this.usuariosRepository.save(nuevo);
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