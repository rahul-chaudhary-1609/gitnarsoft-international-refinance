import * as Constant from "../config/constants.js";
class ApiResponseHandler {
    constructor() { }
    successResponse(res, message, code, data) {
        let response = {
            status: code || Constant.responseCode.SUCCESS,
            message: message,
            data: data,
        };
        res.status(code).json(response);
    }
    errorResponse(res, message, code, data) {
        let response = {
            status: code || Constant.responseCode.INTERNAL_SERVER_ERROR,
            message: message,
            data: data,
        };
        res.status(code).json(response);
    }
}
export default ApiResponseHandler;
