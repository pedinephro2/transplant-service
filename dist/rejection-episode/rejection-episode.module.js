"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectionEpisodeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const rejection_episode_schema_1 = require("./rejection-episode.schema");
const rejection_episode_service_1 = require("./rejection-episode.service");
const rejection_episode_controller_1 = require("./rejection-episode.controller");
let RejectionEpisodeModule = class RejectionEpisodeModule {
};
exports.RejectionEpisodeModule = RejectionEpisodeModule;
exports.RejectionEpisodeModule = RejectionEpisodeModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: rejection_episode_schema_1.RejectionEpisode.name, schema: rejection_episode_schema_1.RejectionEpisodeSchema }])],
        controllers: [rejection_episode_controller_1.RejectionEpisodeController],
        providers: [rejection_episode_service_1.RejectionEpisodeService],
    })
], RejectionEpisodeModule);
//# sourceMappingURL=rejection-episode.module.js.map