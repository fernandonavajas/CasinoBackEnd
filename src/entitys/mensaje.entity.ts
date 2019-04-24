import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Mensaje {

    @PrimaryGeneratedColumn()
        id: bigint;
    
    @Column()
    nick: string;

    @Column()
    mensaje: string;
}
