import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SurveillanceProtocolService } from './surveillance-protocol.service';
import { SurveillanceProtocol } from './surveillance-protocol.schema';

@Controller('api/surveillance')
export class SurveillanceProtocolController {
  constructor(private readonly service: SurveillanceProtocolService) {}
  @Post() create(@Body() body: Partial<SurveillanceProtocol>) { return this.service.save(body); }
  @Get() getAll() { return this.service.findAll(); }
  @Get(':id') getById(@Param('id') id: string) { return this.service.findById(id); }
  @Put(':id') update(@Param('id') id: string, @Body() body: Partial<SurveillanceProtocol>) {
    return this.service.save({ ...body, _id: id });
  }
  @Delete(':id') delete(@Param('id') id: string) { return this.service.delete(id); }
}
