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
exports.ComplicationSchema = exports.Complication = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../common/enums");
let Complication = class Complication {
};
exports.Complication = Complication;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Complication.prototype, "transplantId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.ComplicationType }),
    __metadata("design:type", String)
], Complication.prototype, "complicationType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Complication.prototype, "subType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Complication.prototype, "appearanceDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.Severity }),
    __metadata("design:type", String)
], Complication.prototype, "severity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Complication.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Complication.prototype, "treatment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.ComplicationStatus }),
    __metadata("design:type", String)
], Complication.prototype, "status", void 0);
exports.Complication = Complication = __decorate([
    (0, mongoose_1.Schema)({ collection: 'complications' })
], Complication);
exports.ComplicationSchema = mongoose_1.SchemaFactory.createForClass(Complication);
//# sourceMappingURL=complication.schema.js.map