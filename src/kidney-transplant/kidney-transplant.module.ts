import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KidneyTransplant, KidneyTransplantSchema } from './kidney-transplant.schema';
import { KidneyTransplantService } from './kidney-transplant.service';
import { KidneyTransplantController } from './kidney-transplant.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: KidneyTransplant.name, schema: KidneyTransplantSchema },
    ]),
  ],
  controllers: [KidneyTransplantController],
  providers: [KidneyTransplantService],
})
export class KidneyTransplantModule {}
