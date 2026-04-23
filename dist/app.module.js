"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const eureka_service_1 = require("./eureka/eureka.service");
const kidney_transplant_module_1 = require("./kidney-transplant/kidney-transplant.module");
const biopsy_module_1 = require("./biopsy/biopsy.module");
const complication_module_1 = require("./complication/complication.module");
const hla_module_1 = require("./hla/hla.module");
const immunosuppressant_module_1 = require("./immunosuppressant/immunosuppressant.module");
const rejection_episode_module_1 = require("./rejection-episode/rejection-episode.module");
const surveillance_protocol_module_1 = require("./surveillance-protocol/surveillance-protocol.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/transplant-service'),
            kidney_transplant_module_1.KidneyTransplantModule,
            biopsy_module_1.BiopsyModule,
            complication_module_1.ComplicationModule,
            hla_module_1.HlaModule,
            immunosuppressant_module_1.ImmunosuppressantModule,
            rejection_episode_module_1.RejectionEpisodeModule,
            surveillance_protocol_module_1.SurveillanceProtocolModule,
        ],
        providers: [eureka_service_1.EurekaRegistryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map