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
                    usuario:{
                        id: pedido.usuarioId
                    }
                }
            )
            .execute();

    }





    /****************************** Mostar el historial del cliente */

    async ListarHistorial(rut: string): Promise<any[]> {

        try {
            const historial = await createQueryBuilder(Detalle, 'd')
                .select([
                    "pd.id",
                    "pd.rut",
                    "pd.fecha",
                    "ca.id",
                    "ca.fecha",
                    "d.cantidad",
                    "pl.nombre",
                    "tm.id",
                    "tm.nombre",
                ])
                .innerJoin("d.pedido", "pd")
                .innerJoin("d.carta", "ca")
                .innerJoin("ca.plato", "pl")
                .innerJoin("ca.tipomenu", "tm")
                .where("pd.rut = :rut", { rut: rut })
                .orderBy("ca.fecha", "ASC")
                .getMany();
            return await historial;
        }
        catch (e) {
            return e;
        }
    }
    async listarRutsPedidos(): Promise<any[]> {
        var fecha = new Date();
        const rutPedidos = await createQueryBuilder(Pedido, 'pd')
            .select('DISTINCT pd.rut')//DISTINCT
            .where("fecha <= :dt", { dt: fecha })
            .getRawMany();
        return await rutPedidos;
    }
    async ListarHistorialAdmin(rut): Promise<any[]> {
        try {
            const historial = await createQueryBuilder(Detalle, 'd')
                .select([
                    "user.nombre",
                    "pd.id",
                    "pd.rut",
                    "pd.fecha",
                    "ca.id",
                    "ca.fecha",
                    "d.cantidad",
                    "pl.nombre",
                    "tm.id",
                    "tm.nombre",
                ])
                .innerJoin("d.pedido", "pd")
                .innerJoin("pd.usuario", "user")
                .innerJoin("d.carta", "ca")
                .innerJoin("ca.plato", "pl")
                .innerJoin("ca.tipomenu", "tm")
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