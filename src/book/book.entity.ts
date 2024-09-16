import { text } from "stream/consumers";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('book')

export class book extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;


    @Column()
    tittle : string


    @Column()
    author : string


    @Column()
    year : number

    @Column({ type : 'text'})
    deskripsi : string

    @Column({type : 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    created_at : Date;

    @Column({type : 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    updated_at : Date;

    @Column()
    keyword : string
}