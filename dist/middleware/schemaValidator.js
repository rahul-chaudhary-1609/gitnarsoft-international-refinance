import * as constants from '../config/constants.js';
import ApiResponseHandler from '../utils/responseHandler.js';
const apiResponseHandler = new ApiResponseHandler();
class SchemaValidator {
    constructor() {
        this.validateBody = (schema) => {
            return (req, res, next) => {
                const error = this.validateObjectSchema(req.body, schema);
                if (error) {
                    apiResponseHandler.errorResponse(res, error[0].message.split('"').join(""), constants.responseCode.BAD_REQUEST, error);
                }
                next();
            };
        };
        this.validateQueryParams = (schema) => {
            return (req, res, next) => {
                const error = this.validateObjectSchema(req.query, schema);
                if (error) {
                    apiResponseHandler.errorResponse(res, error[0].message.split('"').join(""), constants.responseCode.BAD_REQUEST, error);
                }
                next();
            };
        };
        this.validateParams = (schema) => {
            return (req, res, next) => {
                const error = this.validateObjectSchema(req.params, schema);
                if (error) {
                    apiResponseHandler.errorResponse(res, error[0].message.split('"').join(""), constants.responseCode.BAD_REQUEST, error);
                }
                return next();
            };
        };
    }
    validateObjectSchema(data, schema) {
        const result = schema.validate(data);
        if (result.error) {
            const errorDetails = result.error.details.map((value) => {
                return {
                    message: value.message,
                    path: value.path
                };
            });
            return errorDetails;
        }
        return null;
    }
}
export default SchemaValidator;
