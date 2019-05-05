import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carta } from 'src/entitys/carta.entity';
import { Repository, createQueryBuilder, getRepository, TableForeignKey, getManager } from 'typeorm';
import { Usuario } from 'src/entitys/usuario.entity';
import { Plato } from 'src/entitys/plato.entity';
import { Tipomenu } from 'src/entitys/tipomenu.entity';



@Injectable()
export class CartaService {

    constructor(
        @InjectRepository(Carta)
        private readonly cartaRepository: Repository<Carta>, ) { }

    //********  consulta  de todas las cartas  **********/
    async getAll(): Promise<Carta[]> {
        return await this.cartaRepository.find();
    }

    //********  consulta  de platos de una carta  **********/
    /*async listarPorFecha(fecha: Date): Promise<Carta[]> {
        
        const listaDePlatos = await getRepository(Usuario)
            .createQueryBuilder()
            .select("carta.id", "carta")
            .addSelect("tipomenu.id", "tipomenu")
            .from(Carta, "carta")
            .leftJoinAndSelect("carta.plato", "plato")
            .where("carta.fecha < :dt", { dt: fecha })
            .leftJoinAndSelect("carta.tipomenu", "tipomenu")
            .orderBy("carta.fecha", "DESC")
            .take(3)
            .getMany();
        //console.log(listaDePlatos);

        return await listaDePlatos;

    }
    */

    //***** Falta ponerle condiciones(que liste lo de los proximos 10 dias en adelante) */
   async listarPorFecha(fecha: Date): Promise<Carta[]> { 

        try {
            const listaDePlatos = await createQueryBuilder(Carta, 'ca')
            .select([
                "ca.id",
                "ca.fecha",
                "pl.id",
                "pl.nombre",
                "pl.nombre",
                "tm.id",
                "tm.nombre"
            ])
                .innerJoin("ca.plato", "pl")
                .innerJoin("ca.tipomenu", "tm")
                .where("ca.fecha < :dt", { dt: fecha })
                .orderBy("ca.fecha", "DESC")
                .take(30)
                .getMany();

            return await listaDePlatos;

        } 
        catch (e) {
            return e;
        }

    }
    async listarFechas(fecha: Date): Promise<any> { 
        try {
            const fechas = await createQueryBuilder(Carta)
            .select ('DISTINCT Carta.fecha')//DISTINCT
                .where("fecha < :dt", { dt: fecha })
                .take(30)
                .getRawMany();
                
            return await fechas;
        } 
        catch (e) {
            return e;
        }
    }
}