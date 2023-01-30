var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import LeadModel from "../models/leadModel.js";
const leadModel = new LeadModel();
class LeadService {
    constructor() { }
    ;
    getLead(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = {
                where: {}
            };
            if (params.lead_id) {
                _query.where.id = params.lead_id;
            }
            let lead = yield leadModel.getAll(_query);
            return lead;
        });
    }
    addLead(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("paras", params);
            let data = {
                customer_name: params.customer_name,
                customer_mobile: params.customer_mobile
            };
            let lead = yield leadModel.addData(data);
            return lead;
        });
    }
}
export default LeadService;
