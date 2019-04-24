import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../entitys/pedido.entity'
import { Injectable } from '@nestjs/common';
 
@Injectable()
export class PedidosService {
    constructor(
        @InjectRepository(Pedido) 
            private readonly usuariosRepository: Repository<Pedido>, ) {}
            
    async getAll(): Promise<Pedido[]> {
        return await this.usuariosRepository.find();
    }

}