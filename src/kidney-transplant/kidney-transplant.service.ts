import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KidneyTransplant, KidneyTransplantDocument } from './kidney-transplant.schema';

@Injectable()
export class KidneyTransplantService {
  constructor(
    @InjectModel(KidneyTransplant.name)
    private model: Model<KidneyTransplantDocument>,
  ) {}

  async save(dto: Partial<KidneyTransplant> & { _id?: string }) {
    if (dto._id) {
      const { _id, ...rest } = dto;
      return this.model.findByIdAndUpdate(_id, rest, { new: true });
    }
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().exec();
  }

  async findById(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Transplant not found');
    return doc;
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id).exec();
  }
}
