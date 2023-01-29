//external modules imports
import { Request,Response, NextFunction } from "express";


//internal modules imports
import * as constants from '../config/constants.js';
import ApiResponseHandler from '../utils/responseHandler.js';

const apiResponseHandler = new ApiResponseHandler();


class SchemaValidator {
    constructor(){}


    validateObjectSchema (data:any, schema:any){
        const result = schema.validate(data);
        if (result.error) {
        const errorDetails = result.error.details.map((value:any) => {
            return {
                message: value.message,
                path: value.path
            };
        });
        return errorDetails;
        }
        return null;
    }
  

  public validateBody = (schema:any) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const error = this.validateObjectSchema(req.body, schema);
      if (error) {
        apiResponseHandler.errorResponse(res,error[0].message.split('"').join(""),constants.responseCode.BAD_REQUEST,error)
      }
      next();
    }
  }
  

  public validateQueryParams = (schema:any) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const error = this.validateObjectSchema(req.query, schema);
      if (error) {
        apiResponseHandler.errorResponse(res,error[0].message.split('"').join(""),constants.responseCode.BAD_REQUEST,error)
      }
      next();
    }
  }
  

  public validateParams = (schema:any) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const error = this.validateObjectSchema(req.params, schema);
      if (error) {
        apiResponseHandler.errorResponse(res,error[0].message.split('"').join(""),constants.responseCode.BAD_REQUEST,error)
      }
      return next();
    }
  }

}

export default SchemaValidator;

