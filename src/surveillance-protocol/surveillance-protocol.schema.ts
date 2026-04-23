import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SurveillancePhase } from '../common/enums';

export type SurveillanceProtocolDocument = HydratedDocument<SurveillanceProtocol>;

@Schema({ collection: 'surveillance_protocols' })
export class SurveillanceProtocol {
  @Prop({ enum: SurveillancePhase }) currentPhase?: SurveillancePhase;
  @Prop() nextConsultationDate?: string;
  @Prop() nextLabTestDate?: string;
  @Prop() consultationFrequency?: number;
  @Prop() labTestFrequency?: number;
  @Prop() completionPercentage?: number;
  @Prop() transplantId?: string;
}

export const SurveillanceProtocolSchema = SchemaFactory.createForClass(SurveillanceProtocol);
