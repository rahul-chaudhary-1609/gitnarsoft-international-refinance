var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DatabaseConnection from "../../../config/db.config.js";
import * as Constant from "../../../config/constants.js";
const dbConnection = new DatabaseConnection();
const AppModel = dbConnection.Model;
const sequelize = dbConnection.sequelize;
class LeadModel extends AppModel {
    getAll(_attributes = null, _where = null, _order = null, _limit = null, _offset = null, _raw = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = {};
            if (_attributes) {
                query.attributes = _attributes;
            }
            if (_where) {
                query.where = _where;
            }
            if (_order) {
                query.order = _order;
            }
            if (_limit) {
                query._limit = _limit;
            }
            if (_offset) {
                query._offset = _offset;
            }
            if (_raw) {
                query.raw = _raw;
            }
            return yield LeadModel.findAll(query);
        });
    }
    addData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield LeadModel.create(data)).get({ plain: true });
        });
    }
}
LeadModel.init({
    id: {
        type: dbConnection.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customer_name: {
        type: dbConnection.DataType.STRING,
        allowNull: false
    },
    customer_mobile: {
        type: dbConnection.DataType.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    tableName: Constant.databaseTables.LEAD_TABLE
});
LeadModel.sync({ alter: true });
export default LeadModel;
