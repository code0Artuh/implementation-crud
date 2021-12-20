import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Gcb } from './gcb';
import { GcbService } from './gcb.service';

@Controller('gcb')
export class GcbController {
  constructor(private readonly gcbService: GcbService) {}

  @Get()
  async listarTodos(): Promise<Gcb[]> {
    return this.gcbService.listarTodos();
  }

  @Post()
  async criar(@Body() gcb: Gcb): Promise<Gcb> {
    return this.gcbService.criar(gcb);
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<Gcb> {
    return this.gcbService.buscarPorId(id);
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() gcbAtualizado: Gcb,
  ): Promise<Gcb> {
    return this.gcbService.atualizar(id, gcbAtualizado);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Gcb> {
    return this.gcbService.remover(id);
  }
}
