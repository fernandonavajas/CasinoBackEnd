import { Carta } from "./carta.entity";
import { Pedido } from "./pedido.entity";
export declare class Detalle {
    id: number;
    cantidad: number;
    carta: Carta;
    pedido: Pedido;
}
