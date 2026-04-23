import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BiopsyService } from './biopsy.service';
import { Biopsy } from './biopsy.schema';

@Controller('api/biopsies')
export class BiopsyController {
  constructor(private readonly service: BiopsyService) {}

  @Post() create(@Body() body: Partial<Biopsy>) { return this.service.save(body); }
  @Get() getAll() { return this.service.findAll(); }
  @Get(':id') getById(@Param('id') id: string) { return this.service.findById(id); }
  @Put(':id') update(@Param('id') id: string, @Body() body: Partial<Biopsy>) {
    return this.service.save({ ...body, _id: id });
  }
  @Delete(':id') delete(@Param('id') id: string) { return this.service.delete(id); }

  @Get('transplant/:transplantId')
  getByTransplant(@Param('transplantId') transplantId: string) {
    return this.service.getByTransplantId(transplantId);
  }
}
