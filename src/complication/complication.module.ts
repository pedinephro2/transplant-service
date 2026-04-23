import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Complication, ComplicationSchema } from './complication.schema';
import { ComplicationService } from './complication.service';
import { ComplicationController } from './complication.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Complication.name, schema: ComplicationSchema }])],
  controllers: [ComplicationController],
  providers: [ComplicationService],
})
export class ComplicationModule {}
