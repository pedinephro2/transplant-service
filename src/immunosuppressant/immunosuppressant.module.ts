import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Immunosuppressant, ImmunosuppressantSchema } from './immunosuppressant.schema';
import { ImmunosuppressantService } from './immunosuppressant.service';
import { ImmunosuppressantController } from './immunosuppressant.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Immunosuppressant.name, schema: ImmunosuppressantSchema }])],
  controllers: [ImmunosuppressantController],
  providers: [ImmunosuppressantService],
})
export class ImmunosuppressantModule {}
