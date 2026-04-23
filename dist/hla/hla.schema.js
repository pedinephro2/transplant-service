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
exports.HlaCompatibilitySchema = exports.HlaCompatibility = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../common/enums");
let HlaCompatibility = class HlaCompatibility {
};
exports.HlaCompatibility = HlaCompatibility;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "donorHlaA", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "donorHlaB", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "donorHlaDr", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "recipientHlaA", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "recipientHlaB", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "recipientHlaDr", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.CrossMatchResult }),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "crossMatchResult", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HlaCompatibility.prototype, "numberOfMismatches", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HlaCompatibility.prototype, "transplantId", void 0);
exports.HlaCompatibility = HlaCompatibility = __decorate([
    (0, mongoose_1.Schema)({ collection: 'hla_compatibilities' })
], HlaCompatibility);
exports.HlaCompatibilitySchema = mongoose_1.SchemaFactory.createForClass(HlaCompatibility);
//# sourceMappingURL=hla.schema.js.map