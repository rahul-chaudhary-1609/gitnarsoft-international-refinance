var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ApiResponseHandler from "../../../utils/responseHandler.js";
import * as Constant from "../../../config/constants.js";
import LeadService from "../services/leadService.js";
const apiResponseHandler = new ApiResponseHandler();
const leadService = new LeadService();
class LeadController {
    constructor() { }
    ;
    getLead(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.query);
                let data = yield leadService.getLead(req.query);
                apiResponseHandler.successResponse(res, Constant.messages.common.SUCCESS, Constant.responseCode.SUCCESS, data);
            }
            catch (error) {
                apiResponseHandler.errorResponse(res, Constant.messages.common.ERROR, Constant.responseCode.INTERNAL_SERVER_ERROR, error);
            }
        });
    }
    addLead(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.query);
                let data = yield leadService.addLead(req.body);
                apiResponseHandler.successResponse(res, Constant.messages.common.SUCCESS, Constant.responseCode.SUCCESS, data);
            }
            catch (error) {
                apiResponseHandler.errorResponse(res, Constant.messages.common.ERROR, Constant.responseCode.INTERNAL_SERVER_ERROR, error);
            }
        });
    }
}
export default LeadController;
