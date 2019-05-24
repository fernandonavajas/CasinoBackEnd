import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carta } from 'src/entitys/carta.entity';
import { Repository, createQueryBuilder, getRepository, TableForeignKey, getManager, getConnection, Connection } from 'typeorm';
import { Usuario } from 'src/entitys/usuario.entity';
import { Plato } from 'src/entitys/plato.entity';
import { Tipomenu } from 'src/entitys/tipomenu.entity';
import { CreateCartaDto } from './carta-dto';



@Injectable()
export class CartaService {

    constructor(
        @InjectRepository(Carta)
        private readonly cartaRepository: Repository<Carta>) { }


    async listarCarta(): Promise<any> {
        //console.log("entro al servicio");
        return await getConnection().createEntityManager().query(
            `select * from public.listarPlatosCartaMayoresAHoy() order by fechacarta desc`
        )
    }

    async listarCartaPorUsuario(rut: number): Promise<any> {
        //console.log("entro al servicio");
        return await getConnection().createEntityManager().query(
            `select * from listarPlatosCartaConCantidadMayoresAHoy(${rut}) order by fechacarta desc;`
        )
    }

    async crearCarta(carta: CreateCartaDto): Promise<any> {

        return await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Carta)
            .values(
                {
                    fecha: carta.fecha,
                    plato: {
                        id: carta.platoId
                    },
                    tipomenu: {
                        id: carta.tipoMenuId
                    }
                }
            )
            .execute();
    }
}