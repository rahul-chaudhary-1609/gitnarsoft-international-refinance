//external modules imports
import {Sequelize, DataTypes, Op, Model} from "sequelize";

//internal modules imports
import * as Constant from "./constants.js"
import Logger from "../logger/logger.js";


class DatabaseConnection {

    public Sequelize = Sequelize;
    public DataType = DataTypes;
    public Op = Op;
    public Model = Model;
    public sequelize;

    constructor(){
        this.sequelize = new Sequelize(
            Constant.dbCredentials.DATABSE,
            Constant.dbCredentials.USER,
            Constant.dbCredentials.PASSWORD,
            {
                host:Constant.dbCredentials.HOST,
                dialect:Constant.dbCredentials.DIALECT,
                define:{
                    timestamps:true,
                }
            }
        )
    }

    public initializeDBConnection(){
        return this.sequelize.authenticate()
        .then(()=>{
            Logger.info("Database connection stablished successfully")
        })
        .catch((error:any)=>{
            Logger.error("Error occured in database connection:",error)
        })
    }

}

export default DatabaseConnection;