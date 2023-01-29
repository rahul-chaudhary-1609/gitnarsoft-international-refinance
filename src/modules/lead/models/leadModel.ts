//internal modules imports
import DatabaseConnection from "../../../config/db.config.js";
import * as Constant from "../../../config/constants.js"

const dbConnection = new DatabaseConnection();
const AppModel = dbConnection.Model;
const sequelize = dbConnection.sequelize;

class LeadModel extends AppModel { 
    public async getAll(_attributes=null,_where=null,_order=null,_limit=null,_offset=null,_raw=true){
        let query:any={}
        if(_attributes){
            query.attributes=_attributes;
        }
        if(_where){
            query.where=_where;
        }
        if(_order){
            query.order=_order;
        }
        if(_limit){
            query._limit=_limit;
        }
        if(_offset){
            query._offset=_offset;
        }
        if(_raw){
            query.raw=_raw;
        }
        return await LeadModel.findAll(query);
    }
    
    public async addData (data:any){           
        return (await LeadModel.create(data)).get({plain:true});
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
        allowNull:false
    },
    customer_mobile: {
        type: dbConnection.DataType.STRING,
        allowNull:false
    }
}, {
    sequelize,
    timestamps: true,
    tableName: Constant.databaseTables.LEAD_TABLE
});

LeadModel.sync({alter:true})

export default LeadModel;