import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ComplicationService } from './complication.service';
import { Complication } from './complication.schema';

@Controller('api/complications')
export class ComplicationController {
  constructor(private readonly service: ComplicationService) {}
  @Post() create(@Body() body: Partial<Complication>) { return this.service.save(body); }
  @Get() getAll() { return this.service.findAll(); }
  @Get(':id') getById(@Param('id') id: string) { return this.service.findById(id); }
  @Put(':id') update(@Param('id') id: string, @Body() body: Partial<Complication>) {
    return this.service.save({ ...body, _id: id });
  }
  @Delete(':id') delete(@Param('id') id: string) { return this.service.delete(id); }
}
