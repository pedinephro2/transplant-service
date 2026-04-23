import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CrossMatchResult } from '../common/enums';

export type HlaCompatibilityDocument = HydratedDocument<HlaCompatibility>;

@Schema({ collection: 'hla_compatibilities' })
export class HlaCompatibility {
  @Prop() donorHlaA?: string;
  @Prop() donorHlaB?: string;
  @Prop() donorHlaDr?: string;
  @Prop() recipientHlaA?: string;
  @Prop() recipientHlaB?: string;
  @Prop() recipientHlaDr?: string;
  @Prop({ enum: CrossMatchResult }) crossMatchResult?: CrossMatchResult;
  @Prop() numberOfMismatches?: number;
  @Prop() transplantId?: string;
}

export const HlaCompatibilitySchema = SchemaFactory.createForClass(HlaCompatibility);
