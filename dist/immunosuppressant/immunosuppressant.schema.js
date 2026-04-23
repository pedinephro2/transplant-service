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
exports.ImmunosuppressantSchema = exports.Immunosuppressant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../common/enums");
let Immunosuppressant = class Immunosuppressant {
};
exports.Immunosuppressant = Immunosuppressant;
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.DrugName }),
    __metadata("design:type", String)
], Immunosuppressant.prototype, "drugName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Immunosuppressant.prototype, "currentDose", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Immunosuppressant.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Immunosuppressant.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Immunosuppressant.prototype, "targetTroughMin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Immunosuppressant.prototype, "targetTroughMax", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Immunosuppressant.prototype, "lastTroughLevel", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Immunosuppressant.prototype, "lastMeasurementDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.LevelStatus }),
    __metadata("design:type", String)
], Immunosuppressant.prototype, "levelStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Immunosuppressant.prototype, "transplantId", void 0);
exports.Immunosuppressant = Immunosuppressant = __decorate([
    (0, mongoose_1.Schema)({ collection: 'immunosuppressants' })
], Immunosuppressant);
exports.ImmunosuppressantSchema = mongoose_1.SchemaFactory.createForClass(Immunosuppressant);
//# sourceMappingURL=immunosuppressant.schema.js.map