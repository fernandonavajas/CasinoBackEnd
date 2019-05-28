import { Carta } from "./carta.entity";
export declare class Plato {
    id: number;
    nombre: string;
    descripcion: string;
    foto: string;
    calorias: number;
    cartas: Carta[];
}
