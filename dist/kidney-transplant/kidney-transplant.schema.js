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
exports.KidneyTransplantSchema = exports.KidneyTransplant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../common/enums");
let KidneyTransplant = class KidneyTransplant {
};
exports.KidneyTransplant = KidneyTransplant;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], KidneyTransplant.prototype, "patientId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KidneyTransplant.prototype, "transplantDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.DonorType }),
    __metadata("design:type", String)
], KidneyTransplant.prototype, "donorType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KidneyTransplant.prototype, "donorBloodGroup", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], KidneyTransplant.prototype, "coldIschemiaTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.GraftStatus }),
    __metadata("design:type", String)
], KidneyTransplant.prototype, "graftStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KidneyTransplant.prototype, "surgicalReportPath", void 0);
exports.KidneyTransplant = KidneyTransplant = __decorate([
    (0, mongoose_1.Schema)({ collection: 'kidney_transplants', timestamps: { createdAt: 'createdAt' } })
], KidneyTransplant);
exports.KidneyTransplantSchema = mongoose_1.SchemaFactory.createForClass(KidneyTransplant);
//# sourceMappingURL=kidney-transplant.schema.js.map