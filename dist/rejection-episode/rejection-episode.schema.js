"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectionEpisodeSchema = exports.RejectionEpisode = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../common/enums");
let RejectionEpisode = class RejectionEpisode {
};
exports.RejectionEpisode = RejectionEpisode;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RejectionEpisode.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.RejectionType }),
    __metadata("design:type", String)
], RejectionEpisode.prototype, "rejectionType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.Severity }),
    __metadata("design:type", String)
], RejectionEpisode.prototype, "severity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], RejectionEpisode.prototype, "creatinineIncrease", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], RejectionEpisode.prototype, "gfrAtRejection", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RejectionEpisode.prototype, "treatment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.RejectionStatus }),
    __metadata("design:type", String)
], RejectionEpisode.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RejectionEpisode.prototype, "biopsyId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RejectionEpisode.prototype, "transplantId", void 0);
exports.RejectionEpisode = RejectionEpisode = __decorate([
    (0, mongoose_1.Schema)({ collection: 'rejection_episodes' })
], RejectionEpisode);
exports.RejectionEpisodeSchema = mongoose_1.SchemaFactory.createForClass(RejectionEpisode);
//# sourceMappingURL=rejection-episode.schema.js.map