import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RejectionEpisode, RejectionEpisodeSchema } from './rejection-episode.schema';
import { RejectionEpisodeService } from './rejection-episode.service';
import { RejectionEpisodeController } from './rejection-episode.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: RejectionEpisode.name, schema: RejectionEpisodeSchema }])],
  controllers: [RejectionEpisodeController],
  providers: [RejectionEpisodeService],
})
export class RejectionEpisodeModule {}
