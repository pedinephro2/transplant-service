"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiopsyModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const biopsy_schema_1 = require("./biopsy.schema");
const biopsy_service_1 = require("./biopsy.service");
const biopsy_controller_1 = require("./biopsy.controller");
let BiopsyModule = class BiopsyModule {
};
exports.BiopsyModule = BiopsyModule;
exports.BiopsyModule = BiopsyModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: biopsy_schema_1.Biopsy.name, schema: biopsy_schema_1.BiopsySchema }])],
        controllers: [biopsy_controller_1.BiopsyController],
        providers: [biopsy_service_1.BiopsyService],
    })
], BiopsyModule);
//# sourceMappingURL=biopsy.module.js.map