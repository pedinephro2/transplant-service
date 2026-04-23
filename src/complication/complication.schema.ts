import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ComplicationStatus, ComplicationType, Severity } from '../common/enums';

export type ComplicationDocument = HydratedDocument<Complication>;

@Schema({ collection: 'complications' })
export class Complication {
  @Prop() transplantId?: string;
  @Prop({ enum: ComplicationType }) complicationType?: ComplicationType;
  @Prop() subType?: string;
  @Prop() appearanceDate?: string;
  @Prop({ enum: Severity }) severity?: Severity;
  @Prop() description?: string;
  @Prop() treatment?: string;
  @Prop({ enum: ComplicationStatus }) status?: ComplicationStatus;
}

export const ComplicationSchema = SchemaFactory.createForClass(Complication);
