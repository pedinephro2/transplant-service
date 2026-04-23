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
exports.BiopsySchema = exports.Biopsy = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../common/enums");
let Biopsy = class Biopsy {
};
exports.Biopsy = Biopsy;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Biopsy.prototype, "biopsyDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.BiopsyIndication }),
    __metadata("design:type", String)
], Biopsy.prototype, "indication", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Biopsy.prototype, "banffScoreT", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Biopsy.prototype, "banffScoreI", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Biopsy.prototype, "banffScoreG", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.BanffCategory }),
    __metadata("design:type", String)
], Biopsy.prototype, "banffCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Biopsy.prototype, "conclusion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Biopsy.prototype, "reportPath", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Biopsy.prototype, "transplantId", void 0);
exports.Biopsy = Biopsy = __decorate([
    (0, mongoose_1.Schema)({ collection: 'biopsies' })
], Biopsy);
exports.BiopsySchema = mongoose_1.SchemaFactory.createForClass(Biopsy);
//# sourceMappingURL=biopsy.schema.js.map