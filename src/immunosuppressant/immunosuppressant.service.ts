import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Immunosuppressant, ImmunosuppressantDocument } from './immunosuppressant.schema';

@Injectable()
export class ImmunosuppressantService {
  constructor(@InjectModel(Immunosuppressant.name) private model: Model<ImmunosuppressantDocument>) {}

  save(dto: Partial<Immunosuppressant> & { _id?: string }) {
    if (dto._id) {
      const { _id, ...rest } = dto;
      return this.model.findByIdAndUpdate(_id, rest, { new: true });
    }
    return this.model.create(dto);
  }
  findAll() { return this.model.find().exec(); }
  async findById(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Drug not found');
    return doc;
  }
  delete(id: string) { return this.model.findByIdAndDelete(id).exec(); }
}
