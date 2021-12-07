import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import jwt = require('jsonwebtoken');
import * as bcrypt from "bcrypt";
import { getRepository } from "typeorm";

export const authenticate = async (request: Request, response: Response) => {
        const repository = getRepository(User);
        const {user_nome, user_senha} = request.body;

        const user = await repository.findOne({where: {user_nome}});

        if(!user){
            return response.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(user_senha, user.user_senha);

        if(user_senha != user.user_senha){
            return response.sendStatus(401);
        }

        const token = jwt.sign({ id: user.user_id}, 'PIXIT2021', {expiresIn: "300s"});
        delete user.user_senha;
        delete user.createdAt;
        delete user.updateAt;

        return response.json({
            user,
            token
        });
    }




