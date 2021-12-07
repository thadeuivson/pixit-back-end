import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const saveUser = async (request: Request, response: Response) => {
  const repository = getRepository(User);
  const { user_nome, user_senha } = request.body;
  const userExists = await repository.findOne({ where: { user_nome } });

  if (userExists) {
    return response.json({ message: "Usuário já existe" });
  }

  const user = getRepository(User).save(request.body);
  return response.json({ message: "Usuário Salvo com Sucesso!" });
};

export const deleteUser = async (request: Request, response: Response) => {
  const { user_id } = request.params;
  const user = await getRepository(User).delete(user_id);

  if (user.affected === 1) {
    const userRemoved = await getRepository(User).findOne(user_id);
    return response.json({ message: "Usuário Removido com Sucesso!" });
  } else {
    return response.status(404).json({ message: "Usuário Não Existe" });
  }
};

export const getUsers = async (request: Request, response: Response) => {
  const users = await getRepository(User).find();
  return response.json(users);
};
