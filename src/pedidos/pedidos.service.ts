import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Pedido } from '../entitys/pedido.entity'
import { Injectable } from '@nestjs/common';
import { Detalle } from 'src/entitys/detalle.entity';

@Injectable()
export class PedidosService {
    constructor(
        @InjectRepository(Pedido)
        private readonly usuariosRepository: Repository<Pedido>, ) { }

    async getAll(): Promise<Pedido[]> {
        return await this.usuariosRepository.find();
    }

    /****************************** Mostar el historial del cliente */
    async ListarHistorial(rut: number): Promise<any[]> {

        try {
            const historial = await createQueryBuilder(Detalle, 'd')
                .select([
                    "pd.id",
                    "pd.rut",
                    "pd.fecha",
                    "ca.fecha",
                    "d.cantidad",
                    "pl.nombre",
                ])
                .innerJoin("d.pedido", "pd")
                .innerJoin("d.carta", "ca")
                .innerJoin("ca.plato", "pl")
                .where("pd.rut = :rut", { rut: rut })
                .orderBy("ca.fecha", "ASC")
                .getMany();
            return await historial;
        }
        catch (e) {
            return e;
        }

    }

}