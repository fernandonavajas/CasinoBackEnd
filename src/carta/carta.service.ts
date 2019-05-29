import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carta } from 'src/entitys/carta.entity';
import { Repository, createQueryBuilder, getRepository, TableForeignKey, getManager, getConnection, Connection, Entity, EntityManager } from 'typeorm';
import { Usuario } from 'src/entitys/usuario.entity';
import { Plato } from 'src/entitys/plato.entity';
import { Tipomenu } from 'src/entitys/tipomenu.entity';
import { CreateCartaDto } from './carta-dto';
import { concat } from 'rxjs';



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

    async EliminarCarta(fechaConsultada: string): Promise<any> {
        console.log(fechaConsultada);
        //var stringfecha=fechaConsultada.toUTCString();
        
        //console.log(stringfecha,typeof(stringfecha));
        return await getConnection().createEntityManager().query(
            `delete from carta where fecha='${fechaConsultada}'`

        )
    }

    /*async crearCarta(carta: CreateCartaDto): Promise<any> {

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
    }*/
    async crearCarta(carta: CreateCartaDto): Promise<any> {
        console.log(carta);
        if(carta.p1==""){carta.p1="1"};
        if(carta.p2==""){carta.p2="1"};
        if(carta.p3==""){carta.p3="1"};
        if(carta.p4==""){carta.p4="1"};
        if(carta.p5==""){carta.p5="1"};
        if(carta.p6==""){carta.p6="1"};
        var cartaF={
            
            fecha: carta.fecha,
            p1: parseInt(carta.p1),
            p2: parseInt(carta.p2),
            p3: parseInt(carta.p3),
            p4: parseInt(carta.p4),
            p5: parseInt(carta.p5),
            p6: parseInt(carta.p6),
        }
        //console.log(cartaF);
        //var stringfecha=fechaConsultada.toUTCString();
        console.log(carta);
        //console.log(stringfecha,typeof(stringfecha));
        return await getConnection().createEntityManager().query(
            //`select InsertarCarta('select InsertarCarta('31-05-2019',5,5,5,5,5,5);`
            `select InsertarCarta('${carta.fecha}',${carta.p1},${carta.p2},${carta.p3},${carta.p4},${carta.p5},${carta.p6});`

        )
    }

}