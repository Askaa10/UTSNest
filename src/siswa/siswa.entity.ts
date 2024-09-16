import { text } from "stream/consumers";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('siswa')

export class siswa extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nama : string

    @Column()
    email: string 

    @Column()
    tempat_lahir : string

    @Column()
    tanggal_lahir : number

    @Column()
    nisn : number

    @Column()
    nik : string

    @Column()
    alamat : string

    @Column({type : 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    created_at : Date;

    @Column({type : 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    updated_at : Date;

    @Column()
    keyword : string
}