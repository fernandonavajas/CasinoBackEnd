import { Carta } from 'src/entitys/carta.entity';
import { Repository } from 'typeorm';
import { CreateCartaDto } from './carta-dto';
export declare class CartaService {
    private readonly cartaRepository;
    constructor(cartaRepository: Repository<Carta>);
    listarCarta(): Promise<any>;
    listarCartaPorUsuario(rut: number): Promise<any>;
    EliminarCarta(fechaConsultada: string): Promise<any>;
    crearCarta(carta: CreateCartaDto): Promise<any>;
}
