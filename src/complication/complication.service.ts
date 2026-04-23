import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Complication, ComplicationDocument } from './complication.schema';

@Injectable()
export class ComplicationService {
  constructor(@InjectModel(Complication.name) private model: Model<ComplicationDocument>) {}

  save(dto: Partial<Complication> & { _id?: string }) {
    if (dto._id) {
      const { _id, ...rest } = dto;
      return this.model.findByIdAndUpdate(_id, rest, { new: true });
    }
    return this.model.create(dto);
  }
  findAll() { return this.model.find().exec(); }
  async findById(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Complication not found');
    return doc;
  }
  delete(id: string) { return this.model.findByIdAndDelete(id).exec(); }
}
