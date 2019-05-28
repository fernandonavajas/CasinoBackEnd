import { CartaService } from './carta.service';
import { CreateCartaDto } from './carta-dto';
export declare class CartaController {
    private cartaService;
    constructor(cartaService: CartaService);
    ListarCartaDeLosProximosDias(response: any): void;
    ListarCartaDeLosProximosDiasDelUsuario(headers: any, response: any): void;
    create(carta: CreateCartaDto, response: any): void;
    delete(headers: any, response: any): void;
}
