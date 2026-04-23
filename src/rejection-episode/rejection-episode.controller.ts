import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RejectionEpisodeService } from './rejection-episode.service';
import { RejectionEpisode } from './rejection-episode.schema';

@Controller('api/rejections')
export class RejectionEpisodeController {
  constructor(private readonly service: RejectionEpisodeService) {}
  @Post() create(@Body() body: Partial<RejectionEpisode>) { return this.service.save(body); }
  @Get() getAll() { return this.service.findAll(); }
  @Get(':id') getById(@Param('id') id: string) { return this.service.findById(id); }
  @Put(':id') update(@Param('id') id: string, @Body() body: Partial<RejectionEpisode>) {
    return this.service.save({ ...body, _id: id });
  }
  @Delete(':id') delete(@Param('id') id: string) { return this.service.delete(id); }

  @Get('transplant/:transplantId')
  getByTransplant(@Param('transplantId') transplantId: string) {
    return this.service.getByTransplantId(transplantId);
  }
}
