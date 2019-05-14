import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tokens } from 'src/entitys/tokens.entity';
import { Repository, createQueryBuilder, getConnection } from 'typeorm';
import { TokensDto } from './tokens-dto';

@Injectable()
export class TokensService {
    constructor(
        @InjectRepository(Tokens)
        private readonly tokensRepository: Repository<Tokens>) { }

    async getOne(rut: number): Promise<Tokens> {
        const oneToken: Tokens = await this.tokensRepository.createQueryBuilder('tokens')
            .select([
                "tokens.rut",
                "tokens.pass"
            ])
            .where('tokens.rut = :rut ', { rut: rut })
            .getOne();
        return await oneToken;
    }

    async updatePassword(rutUsuario: number, pass: string) {
        console.log(rutUsuario, pass);
        return await getConnection()
            .createQueryBuilder()
            .update(Tokens)
            .set({ pass: pass })
            .where("rut = :rut", { rut: rutUsuario })
            .execute();

    }

    async crearTokens(idUsuario: number,rut: number): Promise<any> {

        return await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Tokens)
            .values(
                {
                    rut: rut,
                    pass: '2019',
                    api_key: '',
                    rol: 'cliente',
                    usuario:{
                        id: idUsuario
                    }
                }
            )
            .execute();

    }


}

