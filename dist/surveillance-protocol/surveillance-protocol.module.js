"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveillanceProtocolModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const surveillance_protocol_schema_1 = require("./surveillance-protocol.schema");
const surveillance_protocol_service_1 = require("./surveillance-protocol.service");
const surveillance_protocol_controller_1 = require("./surveillance-protocol.controller");
let SurveillanceProtocolModule = class SurveillanceProtocolModule {
};
exports.SurveillanceProtocolModule = SurveillanceProtocolModule;
exports.SurveillanceProtocolModule = SurveillanceProtocolModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: surveillance_protocol_schema_1.SurveillanceProtocol.name, schema: surveillance_protocol_schema_1.SurveillanceProtocolSchema }])],
        controllers: [surveillance_protocol_controller_1.SurveillanceProtocolController],
        providers: [surveillance_protocol_service_1.SurveillanceProtocolService],
    })
], SurveillanceProtocolModule);
//# sourceMappingURL=surveillance-protocol.module.js.map