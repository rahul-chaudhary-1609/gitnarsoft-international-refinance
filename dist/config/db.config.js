import { Sequelize, DataTypes, Op, Model } from "sequelize";
import * as Constant from "./constants.js";
import Logger from "../logger/logger.js";
class DatabaseConnection {
    constructor() {
        this.Sequelize = Sequelize;
        this.DataType = DataTypes;
        this.Op = Op;
        this.Model = Model;
        this.sequelize = new Sequelize(Constant.dbCredentials.DATABSE, Constant.dbCredentials.USER, Constant.dbCredentials.PASSWORD, {
            host: Constant.dbCredentials.HOST,
            dialect: Constant.dbCredentials.DIALECT,
            define: {
                timestamps: true,
            }
        });
    }
    initializeDBConnection() {
        return this.sequelize.authenticate()
            .then(() => {
            Logger.info("Database connection stablished successfully");
        })
            .catch((error) => {
            Logger.error("Error occured in database connection:", error);
        });
    }
}
export default DatabaseConnection;
