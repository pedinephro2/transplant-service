import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HlaCompatibility, HlaCompatibilitySchema } from './hla.schema';
import { HlaService } from './hla.service';
import { HlaController } from './hla.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: HlaCompatibility.name, schema: HlaCompatibilitySchema }])],
  controllers: [HlaController],
  providers: [HlaService],
})
export class HlaModule {}
