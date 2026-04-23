"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmunosuppressantModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const immunosuppressant_schema_1 = require("./immunosuppressant.schema");
const immunosuppressant_service_1 = require("./immunosuppressant.service");
const immunosuppressant_controller_1 = require("./immunosuppressant.controller");
let ImmunosuppressantModule = class ImmunosuppressantModule {
};
exports.ImmunosuppressantModule = ImmunosuppressantModule;
exports.ImmunosuppressantModule = ImmunosuppressantModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: immunosuppressant_schema_1.Immunosuppressant.name, schema: immunosuppressant_schema_1.ImmunosuppressantSchema }])],
        controllers: [immunosuppressant_controller_1.ImmunosuppressantController],
        providers: [immunosuppressant_service_1.ImmunosuppressantService],
    })
], ImmunosuppressantModule);
//# sourceMappingURL=immunosuppressant.module.js.map