import { PrimaryGeneratedColumn, Entity, OneToMany, Column, ManyToOne } from "typeorm";
import { Plato } from "./plato.entity";
import { Tipomenu } from "./tipomenu.entity";
import { Detalle } from "./detalle.entity";

@Entity()
export class Carta {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ type: "date", nullable: false, })
    fecha: Date;

    @ManyToOne(type => Plato, plato => plato.cartas, { nullable: false })
    plato: Plato;

    @ManyToOne(type => Tipomenu, tipomenu => tipomenu.cartas, { nullable: false })
    tipomenu: Tipomenu;

    @OneToMany(type => Detalle, detalle => detalle.carta, { nullable: false, })
    detalles: Detalle[];
}