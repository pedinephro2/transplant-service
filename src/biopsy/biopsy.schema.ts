import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BanffCategory, BiopsyIndication } from '../common/enums';

export type BiopsyDocument = HydratedDocument<Biopsy>;

@Schema({ collection: 'biopsies' })
export class Biopsy {
  @Prop() biopsyDate?: string;
  @Prop({ enum: BiopsyIndication }) indication?: BiopsyIndication;
  @Prop() banffScoreT?: number;
  @Prop() banffScoreI?: number;
  @Prop() banffScoreG?: number;
  @Prop({ enum: BanffCategory }) banffCategory?: BanffCategory;
  @Prop() conclusion?: string;
  @Prop() reportPath?: string;
  @Prop() transplantId?: string;
}

export const BiopsySchema = SchemaFactory.createForClass(Biopsy);
