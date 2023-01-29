var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import * as Constant from "./config/constants.js";
import DatabaseConnection from './config/db.config.js';
import Logger from './logger/logger.js';
import routes from './routes/routes.js';
const app = express();
const databaseConnection = new DatabaseConnection();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
}));
app.use(bodyParser.json({ limit: "50mb" }));
app.listen(Constant.server.PORT, Constant.server.NAME, () => __awaiter(void 0, void 0, void 0, function* () {
    Logger.info(`Server is runing on ${Constant.server.NAME}:${Constant.server.PORT}`);
    yield databaseConnection.initializeDBConnection();
    routes(app);
}));
