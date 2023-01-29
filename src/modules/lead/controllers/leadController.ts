//external modules imports
import { Request,Response} from "express";

//internal modules imports
import ApiResponseHandler from "../../../utils/responseHandler.js";
import * as Constant from "../../../config/constants.js"
import LeadService from "../services/leadService.js";

const apiResponseHandler = new ApiResponseHandler();
const leadService = new LeadService();

class LeadController {
    constructor(){};

    public async getLead(req: Request, res: Response){
        try {
            console.log(req.query);
            let data = await leadService.getLead(req.query);
            apiResponseHandler.successResponse(res,Constant.messages.common.SUCCESS,Constant.responseCode.SUCCESS,data);          
        } catch (error:any) {
            apiResponseHandler.errorResponse(res, Constant.messages.common.ERROR,Constant.responseCode.INTERNAL_SERVER_ERROR, error);
        }
    }

    public async addLead(req: Request, res: Response){
        try {
            console.log(req.query);
            let data = await leadService.addLead(req.body);
            apiResponseHandler.successResponse(res,Constant.messages.common.SUCCESS,Constant.responseCode.SUCCESS,data);          
        } catch (error:any) {
            apiResponseHandler.errorResponse(res, Constant.messages.common.ERROR,Constant.responseCode.INTERNAL_SERVER_ERROR, error);
        }
    }
}

export default LeadController;