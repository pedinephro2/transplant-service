import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ImmunosuppressantService } from './immunosuppressant.service';
import { Immunosuppressant } from './immunosuppressant.schema';

@Controller('api/drugs')
export class ImmunosuppressantController {
  constructor(private readonly service: ImmunosuppressantService) {}
  @Post() create(@Body() body: Partial<Immunosuppressant>) { return this.service.save(body); }
  @Get() getAll() { return this.service.findAll(); }
  @Get(':id') getById(@Param('id') id: string) { return this.service.findById(id); }
  @Put(':id') update(@Param('id') id: string, @Body() body: Partial<Immunosuppressant>) {
    return this.service.save({ ...body, _id: id });
  }
  @Delete(':id') delete(@Param('id') id: string) { return this.service.delete(id); }
}
