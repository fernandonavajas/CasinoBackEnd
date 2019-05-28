import { Plato } from "./plato.entity";
import { Tipomenu } from "./tipomenu.entity";
import { Detalle } from "./detalle.entity";
export declare class Carta {
    id: number;
    fecha: Date;
    plato: Plato;
    tipomenu: Tipomenu;
    detalles: Detalle[];
}
