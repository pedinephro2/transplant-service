import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { KidneyTransplantService } from './kidney-transplant.service';
import { KidneyTransplant } from './kidney-transplant.schema';

@Controller('api/transplants')
export class KidneyTransplantController {
  constructor(private readonly service: KidneyTransplantService) {}

  @Post()
  create(@Body() body: Partial<KidneyTransplant>) {
    return this.service.save(body);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<KidneyTransplant>) {
    return this.service.save({ ...body, _id: id });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
