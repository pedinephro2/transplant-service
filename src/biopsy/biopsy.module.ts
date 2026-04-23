import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Biopsy, BiopsySchema } from './biopsy.schema';
import { BiopsyService } from './biopsy.service';
import { BiopsyController } from './biopsy.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Biopsy.name, schema: BiopsySchema }])],
  controllers: [BiopsyController],
  providers: [BiopsyService],
})
export class BiopsyModule {}
