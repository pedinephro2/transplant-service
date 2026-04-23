import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EurekaRegistryService } from './eureka/eureka.service';
import { KidneyTransplantModule } from './kidney-transplant/kidney-transplant.module';
import { BiopsyModule } from './biopsy/biopsy.module';
import { ComplicationModule } from './complication/complication.module';
import { HlaModule } from './hla/hla.module';
import { ImmunosuppressantModule } from './immunosuppressant/immunosuppressant.module';
import { RejectionEpisodeModule } from './rejection-episode/rejection-episode.module';
import { SurveillanceProtocolModule } from './surveillance-protocol/surveillance-protocol.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/transplant-service',
    ),
    KidneyTransplantModule,
    BiopsyModule,
    ComplicationModule,
    HlaModule,
    ImmunosuppressantModule,
    RejectionEpisodeModule,
    SurveillanceProtocolModule,
  ],
  providers: [EurekaRegistryService],
})
export class AppModule {}
