import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Detalle } from 'src/entitys/detalle.entity';

@Injectable()
export class DetalleService {
    constructor(
        @InjectRepository(Detalle)
        private readonly detalleRepository: Repository<Detalle>, ) { }

    async getAll(): Promise<Detalle[]> {
        return await this.detalleRepository.find();
    }
}
