import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateIndicadoreDto } from './dto/create-indicadore.dto';
import { UpdateIndicadoreDto } from './dto/update-indicadore.dto';
import { INDICADORES_SERVICE } from 'src/config/services';
import { ClientProxy } from '@nestjs/microservices';

@Controller('indicadores')
export class IndicadoresController {
  
  constructor(
    @Inject(INDICADORES_SERVICE) private readonly indicadoresClient: ClientProxy 
  ) {}

  @Post()
  create(@Body() createIndicadoreDto: CreateIndicadoreDto) {
    return `Create Indic`;
  }

  @Get()
  findAll() {
    return this.indicadoresClient.send({ cmd: 'find_all_templates'}, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Fina One`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndicadoreDto: UpdateIndicadoreDto) {
    return `Update One`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Delete One`;
  }
}
