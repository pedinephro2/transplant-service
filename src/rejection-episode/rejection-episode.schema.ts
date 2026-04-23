import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { RejectionStatus, RejectionType, Severity } from '../common/enums';

export type RejectionEpisodeDocument = HydratedDocument<RejectionEpisode>;

@Schema({ collection: 'rejection_episodes' })
export class RejectionEpisode {
  @Prop() startDate?: string;
  @Prop({ enum: RejectionType }) rejectionType?: RejectionType;
  @Prop({ enum: Severity }) severity?: Severity;
  @Prop() creatinineIncrease?: number;
  @Prop() gfrAtRejection?: number;
  @Prop() treatment?: string;
  @Prop({ enum: RejectionStatus }) status?: RejectionStatus;
  @Prop() biopsyId?: string;
  @Prop() transplantId?: string;
}

export const RejectionEpisodeSchema = SchemaFactory.createForClass(RejectionEpisode);
