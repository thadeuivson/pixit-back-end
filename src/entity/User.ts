import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate} from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    user_nome: string;

    @Column()
    user_senha: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.user_senha = bcrypt.hash(this.user_senha, 8);
    }

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}
