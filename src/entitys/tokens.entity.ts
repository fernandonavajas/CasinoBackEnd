import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./usuario.entity";



@Entity()
export class Tokens{
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({nullable: false, unique: true})
    rut: number;
    
    @Column({nullable: false, length: 255})
    pass: string;

    @Column({nullable: false, unique: true, length: 255})
    api_key: string;

    @Column({nullable: false, length: 50})
    rol: string;

    @ManyToOne(type => Usuario, usuario => usuario.tokens)
    usuario: Usuario;

}