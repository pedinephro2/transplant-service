import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SurveillanceProtocol, SurveillanceProtocolDocument } from './surveillance-protocol.schema';

@Injectable()
export class SurveillanceProtocolService {
  constructor(@InjectModel(SurveillanceProtocol.name) private model: Model<SurveillanceProtocolDocument>) {}

  save(dto: Partial<SurveillanceProtocol> & { _id?: string }) {
    if (dto._id) {
      const { _id, ...rest } = dto;
      return this.model.findByIdAndUpdate(_id, rest, { new: true });
    }
    return this.model.create(dto);
  }
  findAll() { return this.model.find().exec(); }
  async findById(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Protocol not found');
    return doc;
  }
  delete(id: string) { return this.model.findByIdAndDelete(id).exec(); }
}
