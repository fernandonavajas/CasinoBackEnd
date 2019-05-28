import { Tokens } from 'src/entitys/tokens.entity';
import { Repository } from 'typeorm';
export declare class TokensService {
    private readonly tokensRepository;
    constructor(tokensRepository: Repository<Tokens>);
    getOne(rut: number): Promise<Tokens>;
    updatePassword(rutUsuario: number, pass: string): Promise<import("typeorm").UpdateResult>;
    crearTokens(idUsuario: number, rut: number): Promise<any>;
}
