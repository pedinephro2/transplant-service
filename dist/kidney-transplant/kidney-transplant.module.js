"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KidneyTransplantModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const kidney_transplant_schema_1 = require("./kidney-transplant.schema");
const kidney_transplant_service_1 = require("./kidney-transplant.service");
const kidney_transplant_controller_1 = require("./kidney-transplant.controller");
let KidneyTransplantModule = class KidneyTransplantModule {
};
exports.KidneyTransplantModule = KidneyTransplantModule;
exports.KidneyTransplantModule = KidneyTransplantModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: kidney_transplant_schema_1.KidneyTransplant.name, schema: kidney_transplant_schema_1.KidneyTransplantSchema },
            ]),
        ],
        controllers: [kidney_transplant_controller_1.KidneyTransplantController],
        providers: [kidney_transplant_service_1.KidneyTransplantService],
    })
], KidneyTransplantModule);
//# sourceMappingURL=kidney-transplant.module.js.map