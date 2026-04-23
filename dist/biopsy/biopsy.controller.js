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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiopsyController = void 0;
const common_1 = require("@nestjs/common");
const biopsy_service_1 = require("./biopsy.service");
let BiopsyController = class BiopsyController {
    constructor(service) {
        this.service = service;
    }
    create(body) { return this.service.save(body); }
    getAll() { return this.service.findAll(); }
    getById(id) { return this.service.findById(id); }
    update(id, body) {
        return this.service.save({ ...body, _id: id });
    }
    delete(id) { return this.service.delete(id); }
    getByTransplant(transplantId) {
        return this.service.getByTransplantId(transplantId);
    }
};
exports.BiopsyController = BiopsyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BiopsyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BiopsyController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiopsyController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BiopsyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiopsyController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('transplant/:transplantId'),
    __param(0, (0, common_1.Param)('transplantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiopsyController.prototype, "getByTransplant", null);
exports.BiopsyController = BiopsyController = __decorate([
    (0, common_1.Controller)('api/biopsies'),
    __metadata("design:paramtypes", [biopsy_service_1.BiopsyService])
], BiopsyController);
//# sourceMappingURL=biopsy.controller.js.map