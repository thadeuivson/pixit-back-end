import * as express from "express";
import authMiddleware from "../middlewares/authMiddlewares";
import { saveUser, deleteUser, getUsers } from "../controller/ControllerUsuario";
import {authenticate} from "../controller/ControllerAuth";

const routes = express.Router();

routes.post('/api/login', authenticate)

routes.post("/api/user", authMiddleware, saveUser);
routes.delete("/api/user/:user_id", authMiddleware, deleteUser);
routes.get("/api/user", authMiddleware, getUsers);

export default routes