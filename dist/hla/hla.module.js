"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HlaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hla_schema_1 = require("./hla.schema");
const hla_service_1 = require("./hla.service");
const hla_controller_1 = require("./hla.controller");
let HlaModule = class HlaModule {
};
exports.HlaModule = HlaModule;
exports.HlaModule = HlaModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: hla_schema_1.HlaCompatibility.name, schema: hla_schema_1.HlaCompatibilitySchema }])],
        controllers: [hla_controller_1.HlaController],
        providers: [hla_service_1.HlaService],
    })
], HlaModule);
//# sourceMappingURL=hla.module.js.map