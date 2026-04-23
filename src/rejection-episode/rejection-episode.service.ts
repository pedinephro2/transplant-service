import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RejectionEpisode, RejectionEpisodeDocument } from './rejection-episode.schema';

@Injectable()
export class RejectionEpisodeService {
  constructor(@InjectModel(RejectionEpisode.name) private model: Model<RejectionEpisodeDocument>) {}

  save(dto: Partial<RejectionEpisode> & { _id?: string }) {
    if (dto._id) {
      const { _id, ...rest } = dto;
      return this.model.findByIdAndUpdate(_id, rest, { new: true });
    }
    return this.model.create(dto);
  }
  findAll() { return this.model.find().exec(); }
  async findById(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Rejection not found');
    return doc;
  }
  delete(id: string) { return this.model.findByIdAndDelete(id).exec(); }
  getByTransplantId(transplantId: string) { return this.model.find({ transplantId }).exec(); }
}
