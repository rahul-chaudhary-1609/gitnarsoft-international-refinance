//external modules imports
import express from 'express'; 
import cors from "cors";
import bodyParser from 'body-parser';

//internal modules imports
import * as Constant from "./config/constants.js";
import DatabaseConnection from './config/db.config.js';
import Logger from './logger/logger.js';
import routes from './routes/routes.js';

const app = express();
const databaseConnection = new DatabaseConnection();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded(
    {
        extended: false,
        limit: "50mb",
    },
));

app.use(bodyParser.json({ limit: "50mb" }));


app.listen(Constant.server.PORT,Constant.server.NAME,async()=>{
    Logger.info(`Server is runing on ${Constant.server.NAME}:${Constant.server.PORT}`);
    await databaseConnection.initializeDBConnection();
    routes(app);
})