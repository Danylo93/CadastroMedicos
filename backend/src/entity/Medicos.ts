import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Medicos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    crm: string;

    @Column()
    telefone: string;

    @Column()
    celular: string;

    @Column()
    cep: string;

    @Column()
    especialidade_um: string;

    @Column()
    especialidade_dois: string;

}