import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Pokemon {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    nome: string

    @Column({type: 'text'})
    tipo: string

    @Column({type: 'text'})
    img: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;
}
