import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder, getConnection } from 'typeorm';
import { Pedido } from '../entitys/pedido.entity'
import { Injectable } from '@nestjs/common';
import { Detalle } from 'src/entitys/detalle.entity';
import { CreatePedidosDto } from './pedido-dto';

@Injectable()
export class PedidosService {
    constructor(
        @InjectRepository(Pedido)
        private readonly pedidosRepository: Repository<Pedido>, ) { }

    async getAll(): Promise<Pedido[]> {
        return await this.pedidosRepository.find();
    }

    /*****Ingresar pedido */

    async crearPedido(pedido: CreatePedidosDto): Promise<any> {

        return await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Pedido)
            .values(
                {
                    rut: pedido.rut,
                    fecha: pedido.fecha,
                    usuario: {
                        id: pedido.usuarioId
                    }
                }
            )
            .execute();

    }
    /****************************** Mostar el historial del cliente */

    async ListarHistorialCliente(rut: string): Promise<any[]> {
        return await getConnection().createEntityManager().query(
            `select * from public.listarPlatosHistorial(${rut}) order by fechacarta desc;`,
        )
    }

    async ListarHistorialAdmin(): Promise<any[]> {
        return await getConnection().createEntityManager().query(
            `select * from public.listarPlatosHistorialAdmin() order by fechacarta desc, empresa desc;`,
        )
    }

}