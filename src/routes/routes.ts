import authMiddleware from "../middlewares/authMiddlewares";
import { saveUser, deleteUser, getUsers } from "../controller/ControllerUsuario";
import {authenticate} from "../controller/ControllerAuth";
import { Router, Request, Response } from 'express';

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'PIXIT'})
})

routes.post('/api/login', authenticate);
routes.post("/api/user", authMiddleware, saveUser);
routes.delete("/api/user/:user_id", authMiddleware, deleteUser);
routes.get("/api/user/list", authMiddleware, getUsers);

export default routes