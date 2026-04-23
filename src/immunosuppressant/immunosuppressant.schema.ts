import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DrugName, LevelStatus } from '../common/enums';

export type ImmunosuppressantDocument = HydratedDocument<Immunosuppressant>;

@Schema({ collection: 'immunosuppressants' })
export class Immunosuppressant {
  @Prop({ enum: DrugName }) drugName?: DrugName;
  @Prop() currentDose?: number;
  @Prop() startDate?: string;
  @Prop() isActive?: boolean;
  @Prop() targetTroughMin?: number;
  @Prop() targetTroughMax?: number;
  @Prop() lastTroughLevel?: number;
  @Prop() lastMeasurementDate?: string;
  @Prop({ enum: LevelStatus }) levelStatus?: LevelStatus;
  @Prop() transplantId?: string;
}

export const ImmunosuppressantSchema = SchemaFactory.createForClass(Immunosuppressant);
