import { Pedido } from "./pedido.entity";
import { Tokens } from "./tokens.entity";
export declare class Usuario {
    id: number;
    rut: number;
    nombre: string;
    empleados: number;
    correo: string;
    pedidos: Pedido[];
    tokens: Tokens[];
}
