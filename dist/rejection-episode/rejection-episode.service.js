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
exports.RejectionEpisodeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rejection_episode_schema_1 = require("./rejection-episode.schema");
let RejectionEpisodeService = class RejectionEpisodeService {
    constructor(model) {
        this.model = model;
    }
    save(dto) {
        if (dto._id) {
            const { _id, ...rest } = dto;
            return this.model.findByIdAndUpdate(_id, rest, { new: true });
        }
        return this.model.create(dto);
    }
    findAll() { return this.model.find().exec(); }
    async findById(id) {
        const doc = await this.model.findById(id).exec();
        if (!doc)
            throw new common_1.NotFoundException('Rejection not found');
        return doc;
    }
    delete(id) { return this.model.findByIdAndDelete(id).exec(); }
    getByTransplantId(transplantId) { return this.model.find({ transplantId }).exec(); }
};
exports.RejectionEpisodeService = RejectionEpisodeService;
exports.RejectionEpisodeService = RejectionEpisodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(rejection_episode_schema_1.RejectionEpisode.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RejectionEpisodeService);
//# sourceMappingURL=rejection-episode.service.js.map