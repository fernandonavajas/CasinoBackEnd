import { PedidosService } from './pedidos.service';
import { CreatePedidosDto } from './pedido-dto';
export declare class PedidosController {
    private pedidoServices;
    constructor(pedidoServices: PedidosService);
    ListarHistorialCliente(headers: any, response: any): void;
    ListarHistorialAdmin(response: any): void;
    create(pedido: CreatePedidosDto, response: any): void;
}
