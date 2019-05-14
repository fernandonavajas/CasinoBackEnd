import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Detalle } from 'src/entitys/detalle.entity';
import { CreateDetalleDto } from './detalle-dto';

@Injectable()
export class DetalleService {
    constructor(
        @InjectRepository(Detalle)
        private readonly detalleRepository: Repository<Detalle>, ) { }

    async getAll(): Promise<Detalle[]> {
        return await this.detalleRepository.find();
    }

    async crearDetalle(nuevoDetalle: CreateDetalleDto): Promise<any> {
        //console.log(nuevoDetalle);
        return await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Detalle)
            .values(
                {
                    cantidad: nuevoDetalle.cantidad,
                    carta:{
                        id: nuevoDetalle.cartaId
                    },
                    pedido:{
                        id: nuevoDetalle.pedidoId
                    }
                }
            )
            .execute();
       
    }
    
}
