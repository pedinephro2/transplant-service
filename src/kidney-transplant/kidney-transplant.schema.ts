import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DonorType, GraftStatus } from '../common/enums';

export type KidneyTransplantDocument = HydratedDocument<KidneyTransplant>;

@Schema({ collection: 'kidney_transplants', timestamps: { createdAt: 'createdAt' } })
export class KidneyTransplant {
  @Prop() patientId?: number;
  @Prop() transplantDate?: string;
  @Prop({ enum: DonorType }) donorType?: DonorType;
  @Prop() donorBloodGroup?: string;
  @Prop() coldIschemiaTime?: number;
  @Prop({ enum: GraftStatus }) graftStatus?: GraftStatus;
  @Prop() surgicalReportPath?: string;
}

export const KidneyTransplantSchema = SchemaFactory.createForClass(KidneyTransplant);
