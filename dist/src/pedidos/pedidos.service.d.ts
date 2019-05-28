import { Repository } from 'typeorm';
import { Pedido } from '../entitys/pedido.entity';
import { CreatePedidosDto } from './pedido-dto';
export declare class PedidosService {
    private readonly pedidosRepository;
    constructor(pedidosRepository: Repository<Pedido>);
    getAll(): Promise<Pedido[]>;
    crearPedido(pedido: CreatePedidosDto): Promise<any>;
    ListarHistorialCliente(rut: string): Promise<any[]>;
    ListarHistorialAdmin(): Promise<any[]>;
}
