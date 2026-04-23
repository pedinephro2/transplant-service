import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveillanceProtocol, SurveillanceProtocolSchema } from './surveillance-protocol.schema';
import { SurveillanceProtocolService } from './surveillance-protocol.service';
import { SurveillanceProtocolController } from './surveillance-protocol.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: SurveillanceProtocol.name, schema: SurveillanceProtocolSchema }])],
  controllers: [SurveillanceProtocolController],
  providers: [SurveillanceProtocolService],
})
export class SurveillanceProtocolModule {}
