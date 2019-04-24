import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entitys/usuario.entity';
import { Injectable } from '@nestjs/common';
 
@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario) 
            private readonly usuariosRepository: Repository<Usuario>, ) {}
            
    async getAll(): Promise<Usuario[]> {
        return await this.usuariosRepository.find();
    }

}