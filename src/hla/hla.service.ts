import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HlaCompatibility, HlaCompatibilityDocument } from './hla.schema';

@Injectable()
export class HlaService {
  constructor(@InjectModel(HlaCompatibility.name) private model: Model<HlaCompatibilityDocument>) {}

  save(dto: Partial<HlaCompatibility> & { _id?: string }) {
    if (dto._id) {
      const { _id, ...rest } = dto;
      return this.model.findByIdAndUpdate(_id, rest, { new: true });
    }
    return this.model.create(dto);
  }
  findAll() { return this.model.find().exec(); }
  async findById(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('HLA not found');
    return doc;
  }
  delete(id: string) { return this.model.findByIdAndDelete(id).exec(); }
}
