import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import routes from "./routes/routes";

const app = express();
const porta = process.env.PORT || 9000;
createConnection();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(porta, () =>
  console.log("Back-End Rodando na porta : " + porta)
);


