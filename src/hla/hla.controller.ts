import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HlaService } from './hla.service';
import { HlaCompatibility } from './hla.schema';

@Controller('api/hla')
export class HlaController {
  constructor(private readonly service: HlaService) {}
  @Post() create(@Body() body: Partial<HlaCompatibility>) { return this.service.save(body); }
  @Get() getAll() { return this.service.findAll(); }
  @Get(':id') getById(@Param('id') id: string) { return this.service.findById(id); }
  @Put(':id') update(@Param('id') id: string, @Body() body: Partial<HlaCompatibility>) {
    return this.service.save({ ...body, _id: id });
  }
  @Delete(':id') delete(@Param('id') id: string) { return this.service.delete(id); }
}
