import { Usuario } from "./usuario.entity";
import { Detalle } from "./detalle.entity";
export declare class Pedido {
    id: number;
    rut: number;
    fecha: Date;
    usuario: Usuario;
    detalles: Detalle[];
}
