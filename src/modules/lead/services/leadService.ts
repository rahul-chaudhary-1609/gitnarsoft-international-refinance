//external modules imports

//internal modules imports
// import * as Constant from "../../../config/constants.js
import LeadModel from "../models/leadModel.js";

const leadModel = new LeadModel(); 


class LeadService{

    constructor(){};

    public async getLead(params: any){
        let _where:any={}
        if(params.lead_id){
            _where.id = params.lead_id;
        }
        let lead = await leadModel.getAll(null,_where);
        return lead;
    }

    public async addLead(params: any){
        console.log("paras",params)
        let data:any={
            customer_name:params.customer_name,
            customer_mobile:params.customer_mobile
        }
        
        let lead = await leadModel.addData(data);
        return lead;
    }

}

export default LeadService;