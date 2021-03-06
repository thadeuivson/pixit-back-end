import { Request, Response } from "express";
import { User } from "../entity/User";
import jwt = require('jsonwebtoken');
import { getRepository } from "typeorm";

export const authenticate = async (request: Request, response: Response) => {
        const repository = getRepository(User);
        const {user_nome, user_senha} = request.body;

        const user = await repository.findOne({where: {user_nome}});

        if(!user){
            return response.sendStatus(401);
        }

        if(user_senha != user.user_senha){
            return response.sendStatus(401);
        }

        const token = jwt.sign({ id: user.user_id}, 'PIXIT2021', {expiresIn: "1000s"});
        delete user.user_senha;
        delete user.createdAt;
        delete user.updateAt;

        return response.json({
            user,
            token
        });
    }




