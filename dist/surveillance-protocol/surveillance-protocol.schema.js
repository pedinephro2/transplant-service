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
exports.SurveillanceProtocolSchema = exports.SurveillanceProtocol = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../common/enums");
let SurveillanceProtocol = class SurveillanceProtocol {
};
exports.SurveillanceProtocol = SurveillanceProtocol;
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.SurveillancePhase }),
    __metadata("design:type", String)
], SurveillanceProtocol.prototype, "currentPhase", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SurveillanceProtocol.prototype, "nextConsultationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SurveillanceProtocol.prototype, "nextLabTestDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SurveillanceProtocol.prototype, "consultationFrequency", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SurveillanceProtocol.prototype, "labTestFrequency", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SurveillanceProtocol.prototype, "completionPercentage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SurveillanceProtocol.prototype, "transplantId", void 0);
exports.SurveillanceProtocol = SurveillanceProtocol = __decorate([
    (0, mongoose_1.Schema)({ collection: 'surveillance_protocols' })
], SurveillanceProtocol);
exports.SurveillanceProtocolSchema = mongoose_1.SchemaFactory.createForClass(SurveillanceProtocol);
//# sourceMappingURL=surveillance-protocol.schema.js.map