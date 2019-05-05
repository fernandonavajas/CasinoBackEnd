import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plato } from 'src/entitys/plato.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlatoService {
    constructor(
        @InjectRepository(Plato)
        private readonly platoRepository: Repository<Plato>, ) { }

    async getAll(): Promise<Plato[]> {
        return await this.platoRepository.find();
    }

    async getOne(id: number):Promise<Plato> {
        return await this.platoRepository.findOne(id);
    }

}
