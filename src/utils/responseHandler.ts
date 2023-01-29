//external modules imports
import { Response } from "express"

//internal modules imports
import * as Constant from "../config/constants.js"

class ApiResponseHandler{

    constructor(){}

    public successResponse(res: Response, message: string, code: number, data: Object):void {
        let response={
            status: code || Constant.responseCode.SUCCESS,
            message: message,
            data: data,
        }
    
        res.status(code).json(response);
    }
    
    public errorResponse(res: Response, message: string, code: number, data: Object):void {
        let response={
            status: code || Constant.responseCode.INTERNAL_SERVER_ERROR,
            message: message,
            data: data, 
        }
    
        res.status(code).json(response);
    }

}

export default ApiResponseHandler;

